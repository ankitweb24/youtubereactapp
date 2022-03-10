import Apidata from './Apidata';
import Card from './Card';
import Footer from './Footer';
const Service = () => {
  return (
    <>
      <h2 className="heading">our service</h2>
      <div className="service_box">
        {Apidata.map((value, index) =>{
           return <Card title = {value.title} imgsrc = {value.imgsrc} />
        })}
      </div>
      <Footer />
    </>
  );
};

export default Service;
