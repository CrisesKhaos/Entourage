import React, { useState } from "react";
import "./FundContent.css";

function FundContent(props) {
  const [currentAns, setcurrentAns] = useState("");
  const [error, seterror] = useState("");
  const ansList = [
    "londonschoolofeconomics",
    "internationalstudentvisaadviceteam",
    "bhandhanbank",
    "sidneywebbhouse",
    "matic",
    "twozerozeroeighttwozerotwozero",
    "deutschebank",
    "invertedheadandshoulder",
    "₹117.90",
    "ruleofseventwo",
    "sovereigngoldbond",
    "niit",
    "bmw220dmsports",
    "zeropointfour",
  ];

  function SortQues(props1) {
    switch (props1.index) {
      case 0:
        return (
          <p>
            Q1. Harshad is a student from Mumbai. He is a bright student and
            dreams to build a successful career in the corporate world. He has a
            good quantitative ability and has an interest in tracking the stock
            market and business world. After completing high school, he decides
            to take an undergrad course in the field of finance overseas and
            starts searching for the right college for him. He received
            acceptance letter from four colleges, one of which he&rsquo;s
            planning to revert back is located in the city where one of your
            favorite companions has left his footprints on the map of this city
            and one of the alumni of this college is a spouse of a respectable
            man in the world and is acting as one of the Avengers to his nation
            .
          </p>
        );
      case 1:
        return (
          <p>
            Q2. After his college confirmation , it's time for one of the most
            important tasks to be done before going abroad, i.e applying for a
            visa. For this purpose, Harshad decided to take help from an
            advisory firm which specialises in advising the students on
            immigration matters especially for the students of the LSE. He
            approaches the ONLY place where he can enquire about the same.
            Female name of Welsh origin that means God Is My Oath + (an enclosed
            compartment, usually part of a cooker, for cooking and heating) (s)
          </p>
        );
      case 2:
        return (
          <div>
            <p>
              Q3. Harshad has received the scholarship, however that&rsquo;s
              only for tuition fees. Going to university is accompanied with a
              whole host of expenses that can put a lot of financial pressure on
              him. His neighbours suggested a place to help him with the funding
              <br />
              <br />
              1. &#2332;&#2367;&#2360;&#2375; &#2310;&#2346;&#2325;&#2375;
              &#2315;&#2339; &#2310;&#2357;&#2375;&#2342;&#2344; &#2325;&#2375;
              &#2360;&#2366;&#2341; &#2310;&#2327;&#2375;
              &#2348;&#2338;&#2364;&#2344;&#2375; &#2325;&#2375;
              &#2354;&#2367;&#2319;
              &#2360;&#2381;&#2357;&#2368;&#2325;&#2366;&#2352; &#2324;&#2352;
              &#2361;&#2360;&#2381;&#2340;&#2366;&#2325;&#2381;&#2359;&#2352;&#2367;&#2340;
              &#2325;&#2367;&#2351;&#2366; &#2332;&#2366;&#2344;&#2366;
              &#2330;&#2366;&#2361;&#2367;&#2319;&#2404;
            </p>

            <p>
              2. &#2325;&#2367;&#2360;&#2368; &#2342;&#2375;&#2358;
              &#2342;&#2381;&#2357;&#2366;&#2352;&#2366; &#2351;&#2366;
              &#2309;&#2344;&#2381;&#2351; &#2342;&#2375;&#2358;&#2379;&#2306;
              &#2342;&#2381;&#2357;&#2366;&#2352;&#2366;
              &#2309;&#2306;&#2340;&#2352;&#2381;&#2352;&#2366;&#2359;&#2381;&#2335;&#2381;&#2352;&#2368;&#2351;
              &#2360;&#2306;&#2360;&#2381;&#2341;&#2366;&#2323;&#2306;
              &#2325;&#2375; &#2360;&#2366;&#2341; &#2361;&#2379;&#2344;&#2375;
              &#2357;&#2366;&#2354;&#2375;
              &#2354;&#2375;&#2344;-&#2342;&#2375;&#2344; &#2350;&#2375;&#2306;
              &#2310;&#2327;&#2340; &ndash;
              &#2344;&#2367;&#2352;&#2381;&#2351;&#2366;&#2340; &#2325;&#2366;
              &#2357;&#2361;
              &#2354;&#2375;&#2326;&#2366;-&#2332;&#2379;&#2326;&#2366;
              &#2332;&#2379; &#2342;&#2379; &#2326;&#2306;&#2337;&#2379;&#2306;
              &#2330;&#2366;&#2354;&#2370; &#2326;&#2366;&#2340;&#2366;
              &#2324;&#2352; &#2346;&#2370;&#2306;&#2332;&#2368;
              &#2326;&#2366;&#2340;&#2366; &#2350;&#2375;&#2306;
              &#2357;&#2367;&#2349;&#2366;&#2332;&#2367;&#2340;
              &#2361;&#2379;&#2340;&#2366; &#2361;&#2376;
              &#2349;&#2369;&#2327;&#2340;&#2366;&#2344;
              &#2360;&#2306;&#2340;&#2369;&#2354;&#2344; &#2325;&#2368;
              &#2361;&#2379;&#2340;&#2366; &#2361;&#2376; |
            </p>

            <p>
              3. &#2319;&#2325; &#2320;&#2360;&#2368;
              &#2346;&#2381;&#2352;&#2339;&#2366;&#2354;&#2368;
              &#2332;&#2367;&#2360;&#2350;&#2375;&#2306; &#2319;&#2325;
              &#2348;&#2376;&#2306;&#2325; &#2360;&#2368;&#2350;&#2367;&#2340;
              &#2325;&#2381;&#2359;&#2375;&#2340;&#2381;&#2352;
              &#2350;&#2375;&#2306; &#2325;&#2366;&#2352;&#2381;&#2351;
              &#2325;&#2352;&#2340;&#2366; &#2361;&#2376;,
              &#2309;&#2344;&#2381;&#2351;
              &#2360;&#2381;&#2341;&#2366;&#2344;&#2379;&#2306; &#2346;&#2352;
              &#2325;&#2379;&#2312; &#2358;&#2366;&#2326;&#2366;
              &#2344;&#2361;&#2368;&#2306; &#2326;&#2379;&#2354;&#2340;&#2366;
              &#2361;&#2376; &#2324;&#2352;
              &#2360;&#2381;&#2341;&#2366;&#2344;&#2368;&#2351;
              &#2310;&#2357;&#2358;&#2381;&#2351;&#2325;&#2340;&#2366;&#2323;&#2306;
              &#2325;&#2375; &#2346;&#2381;&#2352;&#2340;&#2367;
              &#2309;&#2343;&#2367;&#2325;
              &#2313;&#2340;&#2381;&#2340;&#2352;&#2342;&#2366;&#2351;&#2368;
              &#2361;&#2379;&#2340;&#2366; &#2361;&#2376;&#2404;
              4&#2357;&#2367;&#2325;&#2366;&#2360;
              &#2309;&#2352;&#2381;&#2341;&#2358;&#2366;&#2360;&#2381;&#2340;&#2381;&#2352;
              &#2351;&#2366; &#2325;&#2354;&#2381;&#2351;&#2366;&#2339;
              &#2309;&#2352;&#2381;&#2341;&#2358;&#2366;&#2360;&#2381;&#2340;&#2381;&#2352;
              &#2350;&#2375;&#2306; &#2319;&#2325;
              &#2309;&#2357;&#2343;&#2366;&#2352;&#2339;&#2366; &#2332;&#2379;
              &#2311;&#2360; &#2348;&#2366;&#2340; &#2346;&#2352;
              &#2332;&#2379;&#2352; &#2342;&#2375;&#2340;&#2368; &#2361;&#2376;
              &#2325;&#2367; &#2319;&#2325; &#2347;&#2352;&#2381;&#2350;
              &#2325;&#2366; &#2344;&#2367;&#2352;&#2381;&#2339;&#2351;
              &#2324;&#2342;&#2381;&#2351;&#2379;&#2327;&#2368;&#2325;&#2352;&#2339;
              &#2325;&#2352;&#2344;&#2366; &#2361;&#2376; &#2351;&#2366;
              &#2344;&#2361;&#2368;&#2306; &#2351;&#2361;
              &#2313;&#2360;&#2325;&#2368;
              &#2309;&#2346;&#2375;&#2325;&#2381;&#2359;&#2366; &#2346;&#2352;
              &#2344;&#2367;&#2352;&#2381;&#2349;&#2352;
              &#2325;&#2352;&#2340;&#2366; &#2361;&#2376; &#2325;&#2367;
              &#2309;&#2344;&#2381;&#2351; &#2347;&#2352;&#2381;&#2350;
              &#2325;&#2381;&#2351;&#2366;
              &#2325;&#2352;&#2375;&#2306;&#2327;&#2368;&#2404; 5
              &#2352;&#2366;&#2332;&#2360;&#2381;&#2357; &#2360;&#2375;
              &#2309;&#2343;&#2367;&#2325; &#2357;&#2381;&#2351;&#2351;
              &#2325;&#2375;
              &#2346;&#2352;&#2367;&#2339;&#2366;&#2350;&#2360;&#2381;&#2357;&#2352;&#2370;&#2346;
              &#2361;&#2379;&#2344;&#2375; &#2357;&#2366;&#2354;&#2375;
              &#2328;&#2366;&#2335;&#2375; &#2325;&#2379;
              &#2357;&#2367;&#2340;&#2381;&#2340;&#2346;&#2379;&#2359;&#2367;&#2340;
              &#2325;&#2352;&#2344;&#2375; &#2325;&#2375; &#2354;&#2367;&#2319;
              &#2343;&#2344; &#2313;&#2340;&#2381;&#2346;&#2344;&#2381;&#2344;
              &#2325;&#2352;&#2344;&#2375; &#2325;&#2366; &#2319;&#2325;
              &#2340;&#2352;&#2368;&#2325;&#2366;&#2404;
            </p>
          </div>
        );
      case 3:
        return (
          <p>
            Q4. After having navigated through his college, visa, scholarship
            and education loan, Harshad has reached London, and he is exploring
            the city, looking for a few things, to make his life in London more
            affordable. The first place which he checked is located very close
            to the office which helps the Britishers to visit India (in a legal
            way, ofcourse!). The Intelligence of the students living here cannot
            be Questioned. This place is located 1.5 miles away from his campus.
            Spiderman is currently patrolling the city which houses the cousin
            of the London bridge and below this bridge, people sing till their
            vocal cords give up.He is casting his web all across the city so
            that he can catch the bad guys. This place is located very close to
            the street which is named after something which every country has
            and their citizens must abide by, else, Jake Peralta might arrest
            you! This place is second on Harshad's list. The third place which
            he is considering is located approximately 1 km away from his
            college, this place has 3 universities in very close proximity. It
            is also located near a square whose name is also the first name of a
            famous canadian standup comedian. It shares its name with a famous
            place located in the capital of our country. After checking out all
            these places, Harshad chose the one which was the most affordable
            one.
          </p>
        );
      case 4:
        return (
          <p>
            Q5. While living in the hostel, Harshad once got into an argument
            with his friends about the authenticity of CryptoCurrency, where his
            friends completely believed that it was just a bubble. To prove his
            point, he explained to them how his investment in a crypto whose One
            of the blockchain engineers shares his same surname with one of the
            famous bollywood actors, who made debut in 2009 and an alumni of
            Roman Catholic affiliated college gave him 200x in a month. His
            friends were now curious about which currency Harshad was talking
            about.
          </p>
        );
      case 5:
        return (
          <p>
            Q6. After his graduation, Harshad is considering opportunities in
            areas like Stock trading, investment banking, business consulting
            etc in India. Hence he applied for job interviews at a few
            companies. One common question which he faced while giving his
            aptitude test was that he had to find out when a was the last time a
            particular pattern was formed in the charts which values its group
            of companies on (total free float market capitalization/ Base market
            capitalization) * Base index value.
          </p>
        );
      case 6:
        return (
          <p>
            Q7. Harshad managed to answer the previous question successfully in
            all the interviews, which helped him to land job offers from various
            companies. After carefully considering all the options , he decided
            on which organisation he wanted to work for. In order to share his
            joy with his family and friends, Harshad decided on a fun way to
            announce his placement. All his family and friends had to put on
            their decoding brains to get the good news
          </p>
        );
      case 7:
        return (
          <p>
            Q8. While being a junior level employee, one of his colleague gave
            harshad this which new paper given below and Asked for the type of
            natural phenomenon of fluctuation which started occurring from
            november 2018 in the price of the company which deals in metal x and
            the controlling authority of this company makes sure that all of its
            actions are taken in the view of public interest.
          </p>
        );
      case 8:
        return (
          <p>
            Q9. Along with tracking the financial markets and dealing with his
            clients and superiors, Harshad would use his finance skills and
            knowledge to make some money for himself. While he was scanning the
            market, he found out that Tata power did a great business this year.
            The company's financials will be out in the next two weeks along
            with a few major announcements by the company. There is also a great
            sense of optimism among the investors. He too was certain that the
            company&rsquo;s price would surge. Hence he decided to exploit this
            opportunity.Since dealing his options was not his forte, he was
            unable to decide on a current price. Hence, his broker helped him
            with the dealing.This is the cheque he was paying to his broker,
            Motilal oswal so that they can execute the contract on his behalf.{" "}
          </p>
        );
      case 9:
        return (
          <p>
            Q10. One day while reading the newspaper, Harshad read a bulletin
            which said that a fund manager based in Mumbai is able to tell his
            clients how much time it would take him to give them crazy returns.
            The fund manager, who works in Laxmi chit fund explained their most
            famous scheme to a group of investors, one of the investors named
            Albert Pinto who was from France was not convinced. But then the
            fund manager told him privately that they use a special trick which
            will help them to give 1x return in a particular time frame.
            Impressed by this, Harshad decided to use this rule in his life.
            Suggest the name of this trick to one of your friends .
          </p>
        );
      case 10:
        return (
          <p>
            Q11. It&rsquo;s a very beautiful and important day in Harshad's
            life. He is getting married. But their family wanted to do something
            different rather than following the traditional customs. So the
            parents of the bride and the groom decided to give the couple a
            unique gift. Their parents then narrated a plotline of a thriller
            and asked them to guess what their gift was. The plot is that a very
            famous operative working in the British Secret Intelligence Service
            is on a mission to kill the monarch of India. The plan is ready and
            operative has landed in India. But the mission had to be aborted
            since our operative didn&rsquo;t have enough money to check out from
            the hotel! The monarch left a far off place where he was never
            located in the future. We feel sorry for you MI6. Harshad and his
            wife are now guessing what the gift is.
          </p>
        );
      case 11:
        return (
          <div>
            <p>
              Q12. Now after being in the finance field for a few years, Harshad
              with his experience has found a sector which has a huge potential
              to grow in future and can give him multifold returns and to better
              secure his child&rsquo;s future by passing his legacy. A sector
              which can even survive pandemics and will also help in one's
              development, learning and enlighten them.
            </p>

            <p>
              In International markets this sector is more developed so this
              gives Indian companies operating in this sector even more
              potential to grow.
            </p>

            <p>
              Three of the most important aspects while looking for investment
              according to him are :- 1. The less effort it takes to please the
              customers to do payment the better business is. 2. The better
              company is able to give profits to shareholders as per CA and CL
              the better the company is. 3. Greater the profit mileage of a
              company the better the company is.
            </p>

            <p>
              He finds out the best company to invest in that sector for him
              according to his personal needs.
            </p>

            <p>
              Hint - This sector can help people to learn anything from
              anywhere.
            </p>
          </div>
        );
      case 12:
        return (
          <p>
            Q13. Harshad has now excelled at his job and has made prudent
            investment choices. It's now time to treat himself to one of
            life&rsquo;s luxuries that is being called a necessity. He has
            decided to buy himself a new car. He has decided to buy a car from a
            brand whose logo has evolved from the logo of another company which
            featured a black ring bearing the company name surrounding the
            company logo. The specifications needed are:
          </p>
        );
      case 13:
        return (
          <p>
            Q14. Harshad is good with finance in his professional and personal
            life, he now plans to manage his daily household expense by making a
            strict budget for his personal finance.
            <br /> Hint: Net Income= i-(ii + iii).
            <br /> Savings : ii +3+xv
          </p>
        );
    }
  }

  function submitHandler() {
    setcurrentAns("");
    if (currentAns === ansList[props.location.state.index]) {
      setcurrentAns("");
      if (props.location.state.index !== 13)
        props.history.push({
          pathname: "/fund-content",
          state: { index: props.location.state.index + 1 },
        });
      else
        props.history.push({
          pathname: "/fundamentals",
          state: { index: props.location.state.index + 1 },
        });
      seterror("");
    } else seterror("Incorrect Answer");
  }
  const changeHandler = (e) => {
    setcurrentAns(e.target.value.toString().toLowerCase().trim());
    console.log(currentAns);
  };
  return (
    <div className="main-container">
      <div className="main-card">
        {<SortQues index={props.location.state.index} />}
      </div>
      <div className="cont">
        <input type="text" className="field1" onChange={changeHandler}></input>
        <button className="slidecont-alt" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default FundContent;
