import Layout from "@/components/Layout";
import { API_URL } from "@/configs/index";
import styles from "@/styles/Event.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

export default function MyEventPage({ evt }) {
  const deleteHandler = () => {};

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteHandler}>
            <FaTimes /> Delete Event
          </a>
        </div>

        <span>
          {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>

        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image} width={960} height={600} alt="evtImage" />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href="/events">
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch(`${API_URL}/api/events`);
  const event = await response.json();

  const paths = event.map((evt) => {
    return {
      params: { slug: evt.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const response = await fetch(`${API_URL}/api/events/${slug}`);
  const event = await response.json();

  return {
    props: { evt: event[0] },
  };
};

// export const getServerSideProps = async ({ query: { slug } }) => {
//   const response = await fetch(`${API_URL}/api/events/${slug}`);
//   const event = await response.json();

//   return {
//     props: { evt: event[0] },
//   };
// };
