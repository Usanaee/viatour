import { faqs} from "../constant";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function FAQs() {
  const [visibleQuestion, setVisibleQuestion] = useState(true, {});
  const toggleDetails = (questionId) => {
      setVisibleQuestion((prevVisibleQuestion) => ({
          ...prevVisibleQuestion,
          [questionId]: !prevVisibleQuestion[questionId],
        }));

  };
  return (
    <div className="space-y-8 border-b border-slate-400 py-16">
      <h1 className="text-[#08083c] text-3xl font-medium">FAQ's</h1>
      {faqs.map((question) => (
        <div
          className=" rounded-lg overflow-hidden  px-4 py-4 border border-slate-400"
          id={question.id}
          key={question.id}
        >
          <div
            className="flex items-center cursor-pointer justify-between  "
            onClick={() => toggleDetails(question.id)}
          >
            <h2 className="text-[#08083c] text-md">{question.question}</h2>
            <span className="text-2xl mr-3  text-[#EB662B]">
            {visibleQuestion[question.id] ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                visibleQuestion[question.id] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className=" mt-3 ">
              <p className="text-gray-700">{question.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQs;
