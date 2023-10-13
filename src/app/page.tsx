import Button from "@/components/button";
import Card from "@/components/card";
import Section from "@/components/section";
import Section2 from "@/components/section2";

const placeholderData = [
  {
    id: "jan-nowak",
    name: "Jan Nowak",
    description: `Nie czekaj dłużej – zacznij swoją drogę do zdrowszego i bardziej
        aktywnego życia już teraz. Zarezerwuj ze mną pierwszą sesję i dołącz do
        grona moich zadowolonych klientów, którzy osiągnęli swoje cele fitness!`,
    categories: ["Mma", "Siłownia", "Tenis"],
    img: "https://images.unsplash.com/photo-1619361728853-2542f3864532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
  },
  {
    id: "jan-nowak-1",
    name: "Jan Nowak",
    description: `Nie czekaj dłużej – zacznij swoją drogę do zdrowszego i bardziej
        aktywnego życia już teraz. Zarezerwuj ze mną pierwszą sesję i dołącz do
        grona moich zadowolonych klientów, którzy osiągnęli swoje cele fitness!`,
    categories: ["Mma", "Siłownia", "Tenis"],
    img: "https://images.unsplash.com/photo-1619361728853-2542f3864532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
  },
  {
    id: "jan-nowak-2",
    name: "Jan Nowak",
    description: `Nie czekaj dłużej – zacznij swoją drogę do zdrowszego i bardziej
        aktywnego życia już teraz. Zarezerwuj ze mną pierwszą sesję i dołącz do
        grona moich zadowolonych klientów, którzy osiągnęli swoje cele fitness!`,
    categories: ["Mma", "Siłownia", "Tenis"],
    img: "https://images.unsplash.com/photo-1619361728853-2542f3864532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
  },
  {
    id: "jan-nowak-3",
    name: "Jan Nowak",
    description: `Nie czekaj dłużej – zacznij swoją drogę do zdrowszego i bardziej
        aktywnego życia już teraz. Zarezerwuj ze mną pierwszą sesję i dołącz do
        grona moich zadowolonych klientów, którzy osiągnęli swoje cele fitness!`,
    categories: ["Mma", "Siłownia", "Tenis"],
    img: "https://images.unsplash.com/photo-1619361728853-2542f3864532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
  },
];

export default function Home() {
  return (
    <>
      <div className="h-screen text-white text-center grid bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')]">
        <div className="col-start-1 row-start-1 mx-auto my-auto">
          <h1 className="font-bold text-2xl tracking-widest">
            Potrzebujesz trenera personalnego?
          </h1>
          <p className="mt-2 mb-4">Możemy Ci w tym pomóc!</p>
          <Button href={"/trenerzy"} label={"Wyszukaj trenera"} />
        </div>
      </div>
      <Section />
      <Section2 />
      <section className="py-10 px-12">
        <div className="max-w-5xl mx-auto w-full grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {placeholderData.map((trainer) => (
            <Card
              key={trainer.id}
              name={trainer.name}
              description={trainer.description}
              categories={trainer.categories}
              img={trainer.img}
            />
          ))}
        </div>
      </section>
    </>
  );
}
