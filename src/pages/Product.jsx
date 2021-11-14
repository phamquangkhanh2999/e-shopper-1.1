import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import Helmet from "../components/Helmet";
import ProductView from "../components/ProductView";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import Section, { SectionBody, SectionTitle } from "../components/Section";
import { ProductContext } from "../context/productContext/ProductContext";

const Product = (props) => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();

  const productById = products.find((e) => e.id === Number(id));

  const ProductsRandom = (count) => {
    const max = products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return products.slice(start, start + count);
  };
  return (
    <Helmet title='Product'>
      <Section>
        <SectionBody>
          <ProductView product={productById} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdcol={2} smcol={1} gap={20}>
            {ProductsRandom(8).map((item, index) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
