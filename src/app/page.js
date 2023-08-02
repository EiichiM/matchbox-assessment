
import styles from "./page.module.css";
import Link from "next/link";
import Modal from "@/components/Modal";
import axios from "axios";
import { cookies } from "next/headers";

async function getUser() {
  try {
    const response = await axios.get(`${process.env.domain}/api/users/me`, {
      headers: {
        Cookie: `token=${cookies().get("token")?.value}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return null;
  }
}

export default async function Home({searchParams}) {
  const showModal = searchParams?.modal
  const user = await getUser();
  return (
    <main className={styles.main}>
      <div>
        <h1>Heyy {user?.userName}</h1>
        <h1>Welcome To NEXT JS AUTHENTICATION</h1>
        <Link href='/?modal=true'>
        Open Modalm 
        </Link>
        {showModal && <Modal ModalTitle="Mi Modal" ModalButton='OK' ModalBody="lorem itum"/>}
      </div>
    </main>
  );
}
