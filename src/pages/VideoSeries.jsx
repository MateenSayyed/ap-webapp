import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import styles from "./VideoSeries.module.css";
import VideoGrid from "../components/VideoGrid";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import axios from "axios";

function VideoSeries() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchFAQ() {
      try {
        const res = await axios.get(
          "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3"
        );
        const resp = await res.data;
        setData(resp);
      } catch (error) {
        console.error("There was an error", error);
      }
    }

    fetchFAQ();
  }, []);

  return (
    <>
      <PageHeader />
      {data && (
        <div className={styles.container}>
          <div className={styles.breadCrumb}>
            <div>Home</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="11"
              viewBox="0 0 7 11"
              class="fill-current"
            >
              <path
                fill-rule="evenodd"
                d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0"
              ></path>
            </svg>
            <div>santawani</div>
          </div>
          <div className={styles.title}>{data.details.title}</div>
          <div className={styles.hero}>
            <img
              className={styles.heroimg}
              alt="Thumbnail"
              src="https://cimg.acharyaprashant.org/images/img-4337ee73-d8a3-4c8b-951b-d09a5a6468d3/10/image.jpg"
            />
            <section className={styles.herotext}>
              <h2>{data.details.subtitle}</h2>
              <div>{data.details.description}</div>
            </section>
          </div>
          <div className={styles.sharetitle}>Share this series:</div>
          <div className={styles.share}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="34"
              viewBox="0 0 19 34"
              class="h-7 w-7"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h19v34H0z"></path>
                <path
                  fill="#3E6FA7"
                  stroke="#3E6FA7"
                  stroke-width="1.393"
                  d="M12.074 33H6.23l-.133-14.297H1V13.13h5.102l-.005-4.52C6.096 4.02 9.3 1 14.16 1l3.84.23v5.296h-3.394c-1.892 0-2.532 1.342-2.532 2.81v3.795h5.666l-.765 5.572h-4.9z"
                ></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              class="h-7 w-7"
            >
              <path
                fill="#08BBEE"
                fill-rule="evenodd"
                d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0m4.868 9.8c-2.605 0-4.717 2-4.717 4.469q0 .492.108.955c-3.865-.238-7.293-1.991-9.63-4.638a4.16 4.16 0 0 0-.649 2.232c0 1.571.88 2.948 2.197 3.714a4.8 4.8 0 0 1-2.196-.565v.1c0 2.172 1.677 3.971 3.872 4.3a4.8 4.8 0 0 1-2.248.142c.591 1.757 2.329 3.03 4.421 3.03a10.02 10.02 0 0 1-5.895 1.888q-.574 0-1.131-.062a13.8 13.8 0 0 0 7.258 2.035c7.36 0 13.326-5.651 13.326-12.623l.002-.508v-.05l-.002-.049a7.6 7.6 0 0 0 2.296-2.275 8.3 8.3 0 0 1-2.642.687c.96-.537 1.687-1.406 2.007-2.44a7.7 7.7 0 0 1-2.928 1.078 4.83 4.83 0 0 0-3.449-1.42"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="34"
              viewBox="0 0 32 34"
              class="h-7 w-7"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h32v34H0z"></path>
                <path
                  fill="#06BA27"
                  d="M15.218 1.019c9.364-.445 17.065 7.145 16.774 16.455-.271 8.685-7.533 15.584-16.24 15.452A16 16 0 0 1 9.4 31.509l-.524-.249L.208 33l1.534-8.787A15.9 15.9 0 0 1 0 17.013C-.026 8.503 6.698 1.423 15.218 1.02m.781 3.098a13.06 13.06 0 0 0-9.205 3.804 12.9 12.9 0 0 0-3.812 9.184c0 1.889.393 3.7 1.17 5.392l.245.504.576 1.125-1.084 5.248 5.147-1.217 1.17.58a12.9 12.9 0 0 0 5.793 1.355 12.94 12.94 0 0 0 9.204-3.804 13 13 0 0 0 3.813-9.183c0-3.47-1.354-6.731-3.812-9.184a12.95 12.95 0 0 0-9.205-3.804M9.985 9.543a1.158 1.158 0 0 1 1.729.269l.075.143 1.304 2.943c.147.331.128.709-.044 1.02l-.098.15-.662.854c-.279.36-.316.854-.09 1.249.788 1.368 3.872 4.104 5.338 4.696.37.15.788.088 1.1-.147l.128-.111.758-.77c.26-.265.628-.386.989-.334l.154.033 3.1.888a1.152 1.152 0 0 1 .654 1.727c-.606.955-1.568 2.12-2.771 2.41-2.121.514-5.38.013-9.447-3.775-3.522-3.28-4.453-6.01-4.233-8.177.125-1.23 1.15-2.338 2.016-3.068"
                ></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              class="h-7 w-7"
            >
              <path
                fill="#0A66C2"
                fill-rule="evenodd"
                d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0m-5.841 12.643H7.85V27h4.308zm11.916-.402c-1.895 0-3.33.689-4.106 1.751v-1.35h-4.307V27h4.307v-7.84c0-2.038 1.091-2.957 2.67-2.957 1.379 0 2.499.833 2.499 2.613V27h4.307v-8.815c0-3.877-2.47-5.944-5.37-5.944m-14.07-6.03c-1.407 0-2.584 1.177-2.584 2.584s1.177 2.584 2.584 2.584 2.584-1.177 2.584-2.584-1.177-2.584-2.584-2.584"
              ></path>
            </svg>
          </div>
          <div className={styles.videoctn}>
            Video Series ({data.details.coursesCount})
          </div>
          <VideoGrid items={data.courses} />
          <FAQ />
        </div>
      )}
      <Footer />
    </>
  );
}

export default VideoSeries;
