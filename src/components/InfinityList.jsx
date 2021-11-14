import React from "react";
import Grid from "./Grid";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const InfinityList = (props) => {
  return (
    <div>
      <Grid col={4} mdcol={2} smcol={1} gap={20}>
        {props.data.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </Grid>
    </div>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;
