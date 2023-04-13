import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Navigation />
        <div className="h-3/4 flex justify-center items-center tx-xl">Главная</div>
      </div>
    </>
  )
}