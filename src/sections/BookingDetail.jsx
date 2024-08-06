import { useState } from "react";

const BookingDetail = () => {
  const [adultCount, setAdultCount] = useState(3);
  const [youthCount, setYouthCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(4);
  const [servicePerBooking, setServicePerBooking] = useState(false);
  const [servicePerPerson, setServicePerPerson] = useState(false);
  const [date, setDate] = useState("2024-08-01");

  const adultPrice = 282.0;
  const youthPrice = 168.0;
  const childrenPrice = 80.0;
  const servicePerBookingPrice = 40.0;
  const servicePerPersonPriceAdult = 17.0;
  const servicePerPersonPriceYouth = 14.0;

  const calculateTotal = () => {
    let total =
      adultCount * adultPrice +
      youthCount * youthPrice +
      childrenCount * childrenPrice;
    if (servicePerBooking) {
      total += servicePerBookingPrice;
    }
    if (servicePerPerson) {
      total +=
        adultCount * servicePerPersonPriceAdult +
        youthCount * servicePerPersonPriceYouth;
    }
    return total.toFixed(2);
  };

  return (
    <div className="border p-8 rounded-lg shadow-lg w-full font-sans">
      <div className="text-xl font-medium text-[#08083c] mb-4">From $1,200</div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#08083c]">From</span>
          <div className="px-4 py-2 rounded-lg">
            <input
              type="date"
              id="date"
              name="tourDate"
              className=" cursor-pointer bg-transparent outline-none"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#08083c]">Time</span>
          <div className="px-4 py-2 rounded-lg">
            <select
              name=""
              id=""
              className=" cursor-pointer px-6 py-3 bg-transparent outline-none"
            >
              <option selected>Choose time</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-medium mb-4 text-[#08083c]">Tickets</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#08083c]">
            Adult (18+ years) ${adultPrice.toFixed(2)}
          </span>
          <div className="flex items-center space-x-2">
            <button
              className="border px-2 py-1 rounded"
              onClick={() => setAdultCount(adultCount - 1)}
            >
              -
            </button>
            <span>{adultCount}</span>
            <button
              className="border px-2 py-1 rounded"
              onClick={() => setAdultCount(adultCount + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#08083c]">
            Youth (13-17 years) ${youthPrice.toFixed(2)}
          </span>
          <div className="flex items-center space-x-2">
            <button
              className="border px-2 py-1 rounded"
              onClick={() => setYouthCount(youthCount - 1)}
            >
              -
            </button>
            <span>{youthCount}</span>
            <button
              className="border px-2 py-1 rounded"
              onClick={() => setYouthCount(youthCount + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#08083c]">
            Children (0-12 years) ${childrenPrice.toFixed(2)}
          </span>
          <div className="flex items-center space-x-2">
            <button
              className="border px-2 py-1 rounded"
              onClick={() => setChildrenCount(childrenCount - 1)}
            >
              -
            </button>
            <span>{childrenCount}</span>
            <button
              className="border px-2 py-1 rounded"
              onClick={() => setChildrenCount(childrenCount + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-medium text-[#08083c] mb-4">Add Extra</h3>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={servicePerBooking}
              onChange={() => setServicePerBooking(!servicePerBooking)}
              className="mr-2"
            />
            <span className="text-[#08083c]">Add Service per booking $40</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={servicePerPerson}
              onChange={() => setServicePerPerson(!servicePerPerson)}
              className="mr-2"
            />
            <div>
              <span className="text-[#08083c]">Add Service per person</span>
              <div className="text-sm">Adult: $17.00 - Youth: $14.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center  text-xl mb-4">
        <span className="font-medium">Total:</span>
        <span className="font-bold">${calculateTotal()}</span>
      </div>
      <button className="bg-[#EB662B] text-white py-4 duration-200 rounded-lg w-full hover:bg-[#05073C] font-medium ">
        Book Now
      </button>
    </div>
  );
};

export default BookingDetail;
