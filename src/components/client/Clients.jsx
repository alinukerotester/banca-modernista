import { clients } from '../../constants';
import styles from '../../style';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] cursor-pointer`}
          onClick={() => window.open(client.website, '_blank')}
        >
          <div className="relative group">
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 transition-all duration-500 ease-in-out">
              <span className="text-white font-bold text-lg">ACESAȚI</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
