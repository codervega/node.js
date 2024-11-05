//!fs-module: Asyncronously : Using Promise

let fs = require("fs").promises //? importing fs module with Promise
//todo : node :
// when we are working with Asynchronous promise module, then mandatory use promise, when we importing fs module
//* Without using then and catch method in Asynchronus promise , we can't perform any operation in fs Module
//* then() is used to handle resolve / success state,catch() is used to handle err message

// ! Write / create file using promises with then & catch method
// todo : fs.moduleFile() : This method is used to crate the file & enterd the data
//? Syntax:fs.writeFile("file path","data").then().catch()
// fs.writeFile("p2.txt","Good Morning")
// .then(()=>{
//   console.log("file is craeted and data is entered");
// })
// .catch((err)=>{
//   console.log(err);
// })

////----------------------------------------------------------------------------

//! append data to already existing file
//todo : fs.append()
//? Syntax :fs.appendFile().then().catch()
// fs.appendFile("p2.txt","welcome to js class")
// .then(()=>{
//   console.log("data is added");
// }).catch((err)=>{
//   console.log(err);
// })

//// ----------------------------------------------------------------------------------------
//! read data from other file
//todo : readFile();
//? syntax :fs.readFile("file path","utf-8").then().catch()
// fs.readFile("p2.txt","utf-8").then((data)=>{
// console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })

//// -----------------------------------------------------------------------------
//! delete the file
//todo : unlink()
//? syntax :fs.unlink("file path").then().catch()
// fs.unlink("Middle_East.txt").then(()=>{
//   console.log("file is deleted");
// }).catch((err)=>{
//   console.log(err);
// })
////--------------------------------------------------------------------------------
//! create the folder / diractory
// todo : mkdir()
//? syntax :fs.mkdir("folder name").then().catch()
// fs.mkdir("bollywood").then(()=>{console.log("folder is created");}).catch((err)=>{console.log(err);})

////----------------------------------------------------------------------------
//!deleted the folder
//todo :rmdir()
//?fs.rmdir("folder name").then().catch()
// fs.rmdir("bollywood").then(()=>{
//   console.log("deleted");
// }).catch((err)=>{
//   console.log(err);
// })
////---------------------------------------------------------------
//! rename the file /folder 
//todo : rename()
//? fs.rename("old file / folder name","new file"/"folder name").then().catch()
// fs.rename("p2.txt",'data.txt')
// .then(()=>{
//   console.log("file name is changed");
// }).catch((err)=>{
//   console.log(err)
// })

////----------------------------------------------------------------------------------


// fs.mkdir("folder1").then(()=>{
//   console.log("folder is craeted");
//   fs.mkdir("folder1/folder2").then(()=>{
//     console.log("folder is craeted");
//     fs.writeFile("folder1/folder2/text.txt","namaste India").then(()=>{
//       console.log("file is created");
//     }).catch((err)=>{
//       console.log(err);
//     })
    
//   }).catch((err)=>{
//     console.log(err);
//   })
// }).catch((err)=>{
//   console.log(err);
// })


////------------------------------------------------------------
fs.mkdir("Web-text").then(()=>{
  console.log("folder is created");
  fs.mkdir("Web-text/static").then(()=>{
    console.log(" static folder is created");
    fs.writeFile("Web-text/static/html.txt",`
      HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web. It defines the structure of a webpage by using various elements, which are enclosed within tags. HTML provides the basic framework upon which web developers can add styling (CSS) and functionality (JavaScript) to create engaging, interactive web pages.
      `).then(()=>{
      console.log("html file is craeted");
    }).catch((err)=>{
      console.log(err);
    })
    fs.writeFile("Web-text/static/css.txt",`
      
CSS (Cascading Style Sheets) is a style sheet language used to control the presentation of HTML elements. It defines how HTML elements should look when rendered in a browser, including aspects such as layout, colors, fonts, and spacing. By separating content (HTML) from presentation (CSS), developers can design flexible and responsive web pages with greater control over the look and feel.
      `).then(()=>{
      console.log("css file is craeted");
    }).catch((err)=>{
      console.log(err);
    })
  }).catch((err)=>{
    console.log(err);
  })
  fs.mkdir("Web-text/dynamic").then(()=>{
    console.log("folder is created");
    fs.writeFile("Web-text/dynamic/javascript.txt",`
      JavaScript is a high-level, versatile programming language that was originally developed for creating dynamic and interactive content on websites. It is primarily used on the client side (browser) to manipulate web page elements, handle user input, and fetch or display data without needing to reload the entire page. JavaScript is also widely used on the server side through platforms like Node.js, enabling full-stack development.
      `).then(()=>{
      console.log("javascript file is craeted");
    }).catch((err)=>{
      console.log(err);
    })
    
  }).catch((err)=>{
    console.log(err);
  })
  fs.mkdir("Web-text/SPA").then(()=>{
    console.log("folder is created");
    fs.writeFile("Web-text/SPA/REACT.txt",`
      
React is a JavaScript library used for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components, manage the state of those components, and render the user interface efficiently. React was developed by Facebook and has become one of the most popular libraries for front-end development due to its declarative approach, component-based architecture, and efficient rendering via the virtual DOM.
      `).then(()=>{
      console.log("react file is craeted");
    }).catch((err)=>{
      console.log(err);
    })
    
  }).catch((err)=>{
    console.log(err);
  })

}).catch((err)=>{
  console.log(err);
})
