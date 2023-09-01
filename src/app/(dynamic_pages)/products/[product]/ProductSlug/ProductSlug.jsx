'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styles from './productSlug.module.css';

function ProductSlug({ product }) {
  const image = useRef();
  const thumbnail = useRef();
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setData({ ...image.current.children });
  }, []);

  useEffect(() => {
    slides(data);
  }, [data]);

  function slides(data) {
    Object.values(data).map((item, index) => {
      item.style.aspectRatio = '1 / 1';
      setTimeout(() => {
        item.style.transform = 'translateY(0%)';
        item.style.transition = `all ${index * 220}ms ease-out `;
      }, (index + 1) * 50);
    });
  }

  function changeImage(e) {
    setFlag((prev) => (prev = !prev));
    const srcImg = e.target.src;
    product.thumbnail = srcImg;
    console.log(product.thumbnail);
  }

  useEffect(() => {
    if (flag) {
      changeImage();
    }
  }, []);

  return (
    <div className="mt-[-5rem]">
      <div className="relative">
        <Image
          ref={thumbnail}
          src={product.thumbnail}
          alt={product.id}
          width={650}
          height={100}
          loading="lazy"
          className="object-contain mx-auto relative w-[650px] h-[380px]"
        />
      </div>
      <div
        className={`images flex flex-1 gap-8 mt-12 justify-center items-center lg:overflow-hidden overflow-x-scroll ${styles.mmg}`}
        ref={image}
      >
        {product.images.map((image, index) => {
          return (
            <Image
              src={image}
              alt={`${index + 1}.image`}
              key={index}
              width={120}
              height={120}
              loading="lazy"
              onClick={(e) => changeImage(e)}
              className="cursor-pointer opacity-30 translate-y-[150%]  border-2 border-purple-400 origin-bottom -rotate-6 hover:opacity-100 hover:origin-center hover:rotate-0 hover:drop-shadow-3xl-dark"
            />
          );
        })}
      </div>
      <p className=" mt-12 columns-2 text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt eum
        quisquam consectetur ipsa exercitationem labore quae soluta odit
        blanditiis? Dolore assumenda sapiente dolorum vero ullam debitis quas
        tempora? Nihil, consectetur? Quae iusto accusamus commodi fugit, sequi
        laboriosam quas earum eos, voluptas aspernatur ipsum magnam quos quaerat
        consectetur officia culpa quasi. Perferendis assumenda, quam cum
        incidunt ratione vel ipsam pariatur magni? Iusto ad eos ratione sit quos
        voluptate eligendi aliquam provident eum consectetur, voluptatum
        perferendis! Debitis temporibus esse autem a ipsam illo asperiores omnis
        architecto, officiis delectus eaque enim, numquam perferendis.
        Consequuntur exercitationem eveniet nihil ipsa consequatur dolore
        voluptates dicta consectetur laborum, quas alias itaque ex accusantium
        enim sapiente quia asperiores ullam neque at harum mollitia aliquam
        placeat ut. Sapiente, numquam? Suscipit sequi deserunt minus officiis
        cumque ab magnam! Asperiores aliquam recusandae nesciunt rem sapiente,
        maxime soluta accusantium ut quas, officia quae quaerat earum, in
        temporibus mollitia! Eum iure consectetur quia? Adipisci, excepturi
        expedita enim iure quo obcaecati sunt minus quibusdam. Repudiandae
        voluptatem nobis tempora esse est facere molestias id et debitis
        aliquid. Accusantium consequuntur quidem nisi. Expedita officia
        molestiae eligendi. Odit maxime optio, quo natus, accusantium rem
        eligendi earum, tempora neque laborum libero error veritatis nostrum.
        Voluptatem ad dignissimos ducimus. Deleniti nulla provident unde
        eligendi enim dolores tenetur, repudiandae expedita. Sit, fugiat
        quisquam! Quae modi eum laudantium consequatur. Ut, molestias itaque?
        Tenetur perspiciatis praesentium saepe corrupti veritatis excepturi,
        magnam tempora repellendus rem alias reprehenderit delectus vel nam!
        Debitis, commodi optio. Eaque voluptatibus reprehenderit voluptate,
        nulla aspernatur ipsa quidem iure possimus totam id eum iusto autem
        atque veritatis labore, dolorum optio harum consequuntur ea sapiente.
        Quibusdam quidem quaerat in aut pariatur. Temporibus amet incidunt
        excepturi alias similique ipsum laborum. Tenetur inventore tempora eaque
        dolorum dolorem dolores harum tempore voluptate delectus veniam suscipit
        et, aspernatur sed expedita blanditiis cumque facilis itaque obcaecati.
        Iste ipsa aut ducimus neque! Minus saepe incidunt laudantium dolores
        nisi magni consequuntur aut cumque iste libero quos sit tempore soluta,
        fuga officiis reiciendis ea? Enim repellat accusamus amet esse.
        Explicabo adipisci commodi ratione, pariatur exercitationem asperiores
        maiores quas? Cupiditate, maiores consequuntur praesentium eos minima
        voluptas reiciendis perspiciatis ipsa veritatis suscipit enim? Similique
        facere, necessitatibus nobis dolore quo cum deserunt? Magnam animi
        voluptas non? Quae illum veritatis beatae consequatur eveniet maxime
        possimus, sint hic cum vero quia soluta laboriosam delectus corrupti
        dolorum ut fugiat quod optio placeat culpa dicta deleniti. Ipsa pariatur
        nostrum aperiam magni ullam maiores deleniti incidunt asperiores,
        delectus consequuntur magnam possimus iure perspiciatis excepturi amet
        debitis obcaecati eligendi similique reiciendis. Nulla corrupti vel quae
        beatae quod enim? Quae, alias tenetur. At, soluta modi. Vitae rerum
        alias incidunt magni atque beatae. Perspiciatis, ipsum necessitatibus
        similique ex debitis, animi laudantium nulla enim iure suscipit itaque,
        odit cumque nam hic. Illo modi fuga quibusdam numquam officiis quaerat
        saepe distinctio asperiores! Nemo doloremque pariatur autem facilis
        consectetur laudantium fuga esse. Debitis architecto, doloribus
        voluptates accusamus quos fugiat quas dolorum! Aliquid, consequuntur.
        Necessitatibus rem dolorem soluta, nemo possimus eaque, at, vitae error
        eum fugit itaque atque fuga alias doloremque corrupti tempore facilis
        minima libero architecto ex numquam earum expedita in. Qui, culpa.
        Saepe, consequuntur? Illum enim, dolor consequuntur porro neque, aperiam
        maxime atque aut corrupti voluptates tempora mollitia sint officia
        accusamus, eius quia laborum? Totam, qui iure. Perferendis cum
        dignissimos repellendus rem! Facilis explicabo veniam laborum, quas
        quaerat totam quod architecto dolor itaque commodi eius aperiam quo
        exercitationem qui atque mollitia at voluptate. Alias, et recusandae
        dolor aut quae repudiandae cum amet. Quidem praesentium autem aut
        corrupti tempore deserunt, neque laborum iusto voluptate totam
        necessitatibus doloremque, tempora nobis animi asperiores! Nihil quam,
        totam modi architecto iure magnam eligendi neque officia? Magni,
        voluptatem? Sed sapiente vero magni molestiae labore. Amet tenetur
        iusto, aspernatur harum eius repudiandae id cum cupiditate suscipit,
        magnam porro saepe iste. Minus sint nostrum rerum possimus ullam odio
        dolores facilis! Blanditiis quos nesciunt aut, necessitatibus
        repellendus ad accusamus iure nihil fugiat corporis atque, veniam natus
        dicta quae hic iusto corrupti alias perspiciatis quo, quod dolore
        recusandae. Accusamus magni numquam aliquid! Aliquid laborum debitis
        adipisci quo, et quae quia odit id ad officiis, repellendus eaque
        suscipit, excepturi placeat dolor.
      </p>
    </div>
  );
}

export default ProductSlug;
