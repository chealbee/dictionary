const FormItem = () => {
  return (
    <form className="form">
      <div className="form-group">
        <input type="text" placeholder="Type a word..." />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};
export default FormItem;
