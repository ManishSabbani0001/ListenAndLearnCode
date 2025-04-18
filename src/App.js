import React from 'react';
// import movieAlbum from './Assets/img11.avif'
import './App.css';

function moviesList() {
  const image =[
    {
      src:'./Assets/img11.avif', alt:'img1'
    },
  ];
  const data = [{
    Name: 'Venkatesh as ex-DCP Yadagiri Damodara Sinaraju Raju alias YD Raju'
  },
  {
    Name:"Aishwarya Rajesh as Bhagyalakshmi Sinaraju, Raju' wife"
  },
  {
    Name:"Meenakshi Chaudhary as ACP C. Meenakshi 'Meenu', Raju's ex-girlfriend"
  },
  {
    Name: "Naresh as Telangana Chief Minister D. Kesava"
  },
  {
    Name: "P. Saikumar as Constable P. Manikya Rao"
  },
  {
    Name: 'VTV Ganesh as T.V. Ganesh, Party President'
  },
  {
    Name: "Sarvadaman D. Banerjee as Schoolmaster Yadagiri"
  },
  {
    Name: "Upendra Limaye as Jailer George Antony"
  },
  {
    Name: "Bheems Ceciroleo in an cameo appearance as DJ in 'Blockbuster Pongal'"
  },
  {
    Name: "Anil Ravipudi as Raju's neighbour in a cameo appearance"
  }
  ];
  const movieStory = [
    {
      Story : "Satya Akkela, a renowned businessman comes to India for a businessman vacation to Telangana. Upon the party president's suggestion, he comes to eat in a farmhouse but gets kidnapped by an unknown gang. Meenakshi, a police officer investigates, and takes help form her ex, a cop."
    }
  ];
  const image1 =[
    {
      src:"./Assets/images (9).jpeg", alt:'img1'
    },
  ];
  const data1 = [{
    Name: "Allari Naresh as Relangi Rajababu as a comedian character"
  },
  {
    Name:"Geeth Singh as Soundarya"
  },
  {
    Name:"Madhu Shalini as Rambha"
  },
  {
    Name: "Giri Babu as Rajababu's father"
  },
  {
    Name: "Jaya Prakash Reddy as S. V. Ranga Rao, Soundarya's father"
  },
  {
    Name: "M. S. Narayana as Nagarjuna / Nag, Soundarya's grand father"
  },
  {
    Name: "Dharmavarapu Subramanyam as SP Balasubramanyam"
  },
  {
    Name: "Lakshimipati as Nana Patekar / Aryan Rajesh, Car driver"
  },
  {
    Name: "AVSAVS as chidatala Appa Rao, Soundarya's neighbour"
  },
  {
    Name: "L. B. Sriram as Purohitudu Veturi Sitarama Sastry"
  },
  {
    Name: "Allari Subhashini as Bipasa Basu, chidatala Appa Rao's wife"
  }
  ];
  const movieStory1 = [
    {
      Story : "Relangi Rajababu is such a 'nice guy' that he files against a girl who attempted to harass him, and did not succumb to her, because he wished to remain 'pure' for the woman he marries. After landing a job as an SI, his parents force him to get married because his dowry will be use ful for his sister's wedding. No girl wants to marry him now, because they wonder if he is man enough since he rejected a girl like her. His attempts to make her grant him a divorce and whether he turns over a new leaf is the rest of the story."
    }
  ];
  const image2 =[
    {
      src:"./Assets/images (12).jpeg", alt:'img1'
    },
  ];
  const data2 = [{
    Name: 'Chiranjeevi is a Anji'
  },
  {
    Name:"Namrata Shirodkara as Swapna"
  },
  {
    Name:"Tinnu Anand as Veerendra Bhatia"
  },
  {
    Name: "Nagendra Babu as Sivanna"
  },
  {
    Name: "Nitya shetty Baby Nithya"
  },
  {
    Name: 'Rami Reddy as the local hunter'
  },
  {
    Name: "Ramya Krishna has apeial appearance in the song 'Chikbuk Pori"
  },
  {
    Name: "Reema Sen has a special appearane in the song 'Mirapakaya Bajji'"
  },
  {
    Name: "Alphonsa also has apeial appearance in the song 'Chikbuk Pori"
  },
  ];
  const movieStory2 = [
    {
      Story : "The Atamlingam, a symbol of Lord Shiva, possesses enormous divine powers. Once every 72 years, the Akasha Ganga (Heavenly dimension of the Ganga river from the universe) flows onto the Atmalingam. Those who drink Akasha Gangs's holy water become immortal and gain supernatural powers."
    }
  ];
  const image3 =[
    {
      src:"./Assets/Aparichitudu.jpg", alt:'img1'
    },
  ];
  const data3 = [{
    Name: 'Suresh Heblikar as a Prakash'
  },
  {
    Name:"Shobha as Kusuma"
  },
  {
    Name:"Vasudeva Rao as Rangaiah"
  },
  {
    Name: "Mohan as Shamu"
  },
  {
    Name: "Vikram as Ramanujam"
  },
  {
    Name: 'Sadha as Nandini'
  },
  {
    Name: "Nassar as Dr. Vijay Kumar"
  },
  {
    Name: "Kalabhavan Mani as Ponnambalam (cameo)"
  },
  {
    Name: "Sriranjani as Janaki(voice dubbed by Meera Krishnan)"
  },
  {
    Name: "P. Unnikrishnan in a cameo appearance as singer in Thyagaraja Festival"
  },
  {
    Name: "Raju Sundaram (Special appearance as a harmonium player in the song 'O Sukumari'"
  }
  ];
  const movieStory3 = [
    {
      Story : "Ramanujam 'Ambi' Iyengar, a straighforward consumer protection advocate from Thiruvallikeni, Chennai, expects everyone to follow the law and prosecutes those who violate it, but his efforts are unsuccessful due to circumstantial evidence favours the accused. His efforts to raise civic awareness go unackonwledged due to general lack of seriousness and widespread corruption. "
    }
  ];
  const zeroImage= image.map((element, index) =>  {
    return (
      <img key ={index} src={element.src} height='260' width='530' alt="" id='imge1'/> 
    );
  });
  const moviesData = data.map((e) => {
    return (
      <ul>
        <li>{e.Name}</li>
      </ul>
    );
  })
  const movies = movieStory.map((ele) => {
    return (
      <p>{ele.Story}</p>
    );
  })
  const firstImage= image1.map((element) =>  {
    return (
      <img src={element.src} height='250' width='530' alt=""/>
    );
  });
  const moviesData1 = data1.map((e) => {
    return (
      <ul>
        <li>{e.Name}</li>
      </ul>
    );
  })
  const movies1 = movieStory1.map((ele) => {
    return (
      <p>{ele.Story}</p>
    );
  })
  const secondImage= image2.map((element) =>  {
    return (
      <img src={element.src} height='250' width='530' alt=""/>
    );
  });
  const moviesData2 = data2.map((e) => {
    return (
      <ul>
        <li>{e.Name}</li>
      </ul>
    );
  })
  const movies2 = movieStory2.map((ele) => {
    return (
      <p>{ele.Story}</p>
    );
  })
  const thirdImage= image3.map((element) =>  {
    return (
      <img src={element.src} height='250' width='530' alt=""/>
    );
  });
  const moviesData3 = data3.map((e) => {
    return (
      <ul>
        <li>{e.Name}</li>
      </ul>
    );
  })
  const movies3 = movieStory3.map((ele) => {
    return (
      <p>{ele.Story}</p>
    );
  })
  return (
      <div className="main_header">
        <div className="header">
          <div id= "album">{zeroImage}</div></div>
        <h2>Cast</h2>
      <div className="header">{moviesData}</div>
      <h2>Story</h2>
      <div className="header">{movies}</div><hr/>
      <div className="header">
          <div id= "album">{firstImage}</div></div>
          <h2>Cast</h2>
      <div className="header">{moviesData1}</div>
      <h2>Story</h2>
      <div className="header">{movies1}</div><hr/>
      <div className="header">
          <div id= "album">{secondImage}</div></div>
          <h2>Cast</h2>
      <div className="header">{moviesData2}</div>
      <h2>Story</h2>
      <div className="header">{movies2}</div><hr/>

      <div className="header">
          <div id= "album">{thirdImage}</div></div>
          <h2>Cast</h2>
      <div className="header">{moviesData3}</div>
      <h2>Story</h2>
      <div className="header">{movies3}</div>
    </div>
  )
};
export default moviesList;
