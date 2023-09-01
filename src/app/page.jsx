import Image from 'next/image';

export default function Home() {
  return (
    <main className="justify-between items-center gap-48 lg:flex lg:flex-row flex-col">
      <div className="flex flex-col flex-1 gap-8">
        <h1 className="header text-5xl">Your Best Online shop destination</h1>
        <p className="sub_text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse itaque
          sed adipisci obcaecati ab, dolorum quis natus nobis cumque impedit eos
          perferendis? Ad atque sunt nihil, minima cupiditate ducimus a.
        </p>
      </div>
      <div className="image lg:flex-1 mt-12">
        <Image
          src={'heroImage.svg'}
          alt="Shop Image"
          width={450}
          height={450}
        />
      </div>
    </main>
  );
}
