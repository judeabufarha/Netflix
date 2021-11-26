import "./styles.css";

export const Row = (props) => {
    const {title, images} = props;
  
    return (
    <div>
        <div className = "title_headings">
             <h2>{title}</h2>
        </div>
      <div className="row">
        {images !== undefined && images.length > 0 &&
          images.map((img) => (
            <img className = "image_list" src={img} />
          ))
        }
      </div>
      </div>
    );
  };