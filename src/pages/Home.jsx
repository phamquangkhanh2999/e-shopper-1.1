import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";

import ProductCard from "../components/ProductCard";

import HeroSlider from "../components/HeroSlider";

import PolicyCard from "../components/PolicyCard";
import policy from "../static/policy";

import { ProductContext } from "../context/productContext/ProductContext";

const Home = () => {
  const { products, slider } = useContext(ProductContext);

  const ProductsRandom = (count) => {
    const max = products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return products.slice(start, start + count);
  };
  return (
    <Helmet title='Trang chủ'>
      {/* heor slider */}
      <HeroSlider data={slider} control={true} auto={true} timeOut={5000} />
      {/* end heor slider */}

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdcol={2} smcol={1} gap={20}>
            {policy.map((item, index) => (
              <Link to='/policy' key={index}>
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}
      {/* best selling section */}
      <Section>
        <SectionTitle>Top sản phẩm bán chạy</SectionTitle>
        <SectionBody>
          <Grid col={4} mdcol={2} smcol={1} gap={20}>
            {ProductsRandom(4).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end best selling section */}
      {/* new arrival section */}
      <Section>
        <SectionTitle>sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdcol={2} smcol={1} gap={20}>
            {ProductsRandom(8).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end new arrival section */}
      {/* banner */}
      <Section>
        <SectionBody>
          <Link to='/catalog'>
            <img
              src='https://ucarecdn.com/a8243c3c-bd41-47ca-aae6-554fc758c3dc/store.jpg'
              alt=''
            />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}
      {/* popular product section */}
      <Section>
        <SectionTitle>phổ biến</SectionTitle>
        <SectionBody>
          <Grid col={4} mdcol={2} smcol={1} gap={20}>
            {ProductsRandom(12).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end popular product section */}
    </Helmet>
  );
};

export default Home;
