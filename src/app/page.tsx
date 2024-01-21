import Image from "next/image";
import getFiles from "./actions";

export default async function Home() {
  let files: string [] = await getFiles();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        THis is the editor
      </p>
        {
        files.map((el:string,i:number)=>{
           return <p key={i}>{el}</p>
          })
        }
        This is the side-pannel
   </main>
  );
}
