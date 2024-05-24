import { useEffect, useState } from "react";
import styles from "./FAQ.module.css";
import axios from "axios";
import Loader from "./Loader";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFAQ() {
      try {
        const res = await axios.get(
          "https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=hindi"
        );
        const data = await res.data;
        setFaqs(data);
        setIsLoading(false);
      } catch (error) {
        console.error("There was an error", error);
      }
    }

    fetchFAQ();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqWrapper}>
      <div className={styles.faqInfo}>
        <h1>FAQs</h1>
        <p>
          Can't find the answer you're looking for? Reach out to our support
          team.
        </p>
      </div>
      <div className={styles.faqContainer}>
        {isLoading && <Loader />}
        {faqs &&
          faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div className={styles.question} onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span
                  className={`${styles.arrow} ${
                    activeIndex === index ? styles.rotate : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    class="fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414"
                    ></path>
                  </svg>
                </span>
              </div>
              <div
                className={`${styles.answer} ${
                  activeIndex === index ? styles.show : styles.hide
                }`}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FAQ;
