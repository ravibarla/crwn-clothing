import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collections-overview.styles.scss";
import CollectionPreview from "../preview-collection/preview-collection.component.js";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-oerview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapDispatchToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});
export default connect(mapDispatchToProps)(CollectionsOverview);
