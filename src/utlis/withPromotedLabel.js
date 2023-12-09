const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="m-2 p-2 bg-green-500 text-white rounded-md absolute">
          Veg
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};
export default withPromotedLabel;
