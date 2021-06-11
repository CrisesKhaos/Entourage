import React from "react";
import "./BoxContent.css";
import img1_2 from "./BoxImg/Box1_2.PNG";
import img1_1 from "./BoxImg/Box1_1.PNG";
import img2_2 from "./BoxImg/Box2_2.PNG";
import img2_1 from "./BoxImg/Box1_2.PNG";
import img3 from "./BoxImg/Box3.PNG";
import img4 from "./BoxImg/Box4.png";
function BoxContent(props) {
  function Sort(props1) {
    switch (props1.index) {
      case 0:
        return (
          <p>
            Forensic Accounting.
            <br />
            Company Overview: Althea &amp; Co, is based in Mumbai, India.
            Founded by Althea and her husband Richard in 2008, this apparel
            company specializes in men&rsquo;s formal shirts. <br />
            The issue was identified from a call by Mr Kamlesh, a manager of the
            company. The manager harboured suspicions about certain ongoing
            fraudulent activities. He went on to give a list of suspects to a
            reputed forensic accounting firm where you are an investigator. The
            whistleblower reported a list of employees to the firm after he
            suspected violation of corporate laws &amp; ethics. <br />
            This is the list of the suspects
            <br />
            Esha Saini
            <br />
            At 36 years of age, Esha Saini is the auditor for Althea &amp; Co.
            She has been working with the company for the past year. As a
            qualified CA, she has worked with some top names in the industry.
            With a clear academic vision, Esha excelled in her professional
            endeavours. <br />
            Ms. Saini has been rumoured to be in a relationship with one of the
            top directors of the firm. As a hopeless romantic, she has often
            been suspected to have fancy getaways with her rumoured partner. Ms.
            Saini is a typical example of a people pleaser. Non-confrontational
            in nature, she finds it difficult to say &lsquo;no&rsquo; to the
            surrounding ones. She often goes out of her way to help out her kit
            and kin. <br />
            Akshita <br />
            Majored in banking and insurance, 50-year-old Akshita has been a
            General manager here at Althea &amp; Co for 6 years, she has been up
            in line for a duly deserved promotion since the past 3 years which
            is due yet. Being a single mother, she is unable to put in a lot of
            overtime in comparison with her colleagues. However, she has never
            let her time constraints affect her performance. She is responsible
            for the collection &amp; recording of sales.
            <br />
            Her daughter, Sakshee is a fresh graduate and an aspiring
            aeronautical engineer. She has been admitted into Harvard School of
            applied Sciences for her masters programme. Even with financial aid,
            Akshita is struggling to keep up with the tuition fee.
            <br />
            Harsh Kapoor
            <br />A 28-year-old hustler, he has always been an overachiever. He
            has achieved great success at a very young age in this life. His
            ambitions drive him to climb the corporate ladder at a quick pace.
            Starting off in the finance department, he is responsible to look
            after the remuneration, employee benefits and managing related
            investment funds. <br />
            Harsh grew up in a small town in Madhya Pradesh. He is an employee
            who brings in additional clients for the firm, even though his
            designation doesn't compel him to do so. Over the years he has
            developed a sense of belonging to the company. His peers describe
            him to be a loyal and committed friend.
            <br />
            Anil Agal <br />
            54-year-old, Anil Agal, is the youngest member on the board of
            directors of Althea &amp; Co. Anil is the perfect example of a
            rags-to-riches story. Ever since he entered the world of sales at
            the young age of 16, he had a unique way around his pitches. Having
            started off in the sales world as a young man, Mr. Agal over the
            years managed to rise from the ranks of a salesman to the
            go-to-person on the board of directors regarding executive decisions
            concerning the sales and purchase department of the company. <br />
            Going back to his young days as a salesman, Mr. Agal was always the
            provider of the family. He shouldered the financial responsibility
            for a household of 4. As life took its turns, Mr. Agal still found
            himself in the same shoes. He continues to be the backbone for the
            people in his professional and personal worlds. <br />
            Rahul Bhatt <br />
            This 45-year-old has a knack for communication, negotiation,
            convincing and over achieving targets, which is what convinced the
            company that he was the best person to head the sales department.
            Always on his A game, the very talented Mr Bhatt, has been going
            through a sales block since the past couple of years. Mr Bhatt had
            some roadblocks in meeting his targets in the past couple of
            quarters. However, he redeemed himself in the last quarter by
            achieving an exceptional remuneration for the company, making up for
            all the past quarters.
            <br />
            Growing up in an army household, Col. Ajay Bhatt has always run a
            very strict household and Rahul was always taught to be the best at
            everything he did or there would be serious consequences for the
            same. Having a family of 3 dependent on him, he desires to give them
            the most luxurious lifestyle he can afford. <br />
            Aayan Kasmani
            <br />
            Mr. Kasmani is a 31-year-old HR employee. His primary responsibility
            is to negotiate and allocate salaries to the employees. He has
            always been very tactful in his ways. He knows how to gauge
            different scenarios. <br />
            Dealing with an abusive father, he had to take up the financial
            responsibility for his family at a very young age. Having to deal
            with the real world from the very beginning made him a very street
            smart person. Although Mr Agal has had a rough childhood, he was
            always close to his mother. Ever since he was a little boy, his
            mother fostered the values of loyalty and honesty. Mr.
            Kasmani&rsquo;s world was shaken when his mother got diagnosed with
            stage-3 cancer. <br />
            <br />
            Reena Dias
            <br />
            Mrs. Dias is a 42-year-old legal associate of Althea &amp; Co. She
            is in charge of handling the lawsuits against the company. In her 5
            years of employment with the company, she has maintained an
            impeccable track record. She has one of the most impressive career
            graphs for someone of her age with the variety of cases she has
            fought and won within her area of expertise.
            <br />
            Mrs. Dias is happily married and is a mother of two daughters. In
            her spare time, you will find her advocating women&rsquo;s rights.
            Her support for social causes goes beyond advocacy. She is a
            frequent donor with some renowned NGOs. <br />
            Rohit Shetty
            <br />
            Being in this company for almost 2 years, Rohit started working for
            Althea and co after his post graduation in operations and
            management. His qualifications helped him attain the position of a
            manager in the purchase department where his day-to-day activities
            consist of handling purchase inventory, sanctioning purchase orders
            and upkeep of purchase and cash books. <br />
            A 28-year-old family man was recently engaged to his college
            sweetheart and is set to tie the knot in December of next year.
            Rupa, his fianc&eacute;, has her heart set on a destination wedding
            in Udaipur, for which they are currently saving
            <br />
          </p>
        );
      case 1:
        return (
          <div className="img-container">
            <img className="img-box" src={img1_1} />
            <img src={img1_2} />
          </div>
        );
      case 2:
        return (
          <div className="img-container">
            <img className="img-box" src={img2_1} />
            <img src={img2_2} />
          </div>
        );
      case 3:
        return (
          <div className="img-container">
            <img className="img-box-alt" src={img3} />
          </div>
        );
      case 4:
        return (
          <div className="img-container">
            <img className="img-box-alt" src={img4} />
          </div>
        );
      case 5:
        return <h1>No content rn</h1>;
      case 6:
        return <h1>No content rn</h1>;
    }
  }

  return (
    <>
      <div className="card">{<Sort index={props.location.state.index} />}</div>
      <button
        className="slidebck"
        onClick={() => props.history.replace("/nancy-home")}
      >
        Back
      </button>
    </>
  );
}

export default BoxContent;