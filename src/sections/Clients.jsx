import { clientReviews } from "../constants";

const Clients = () => {
  return (
    <section className="c-space my-20" id="reviews">
      <h3 className="head-text">Hear from my Clients</h3>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={item.id} className="client-review">
            <div>
              <p className="text-white-600 font-light">{item.review}</p>
              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 object-contain rounded-full"
                  />

                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {item.position}
                    </p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
