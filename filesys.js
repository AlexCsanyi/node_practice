// File System module

const fs = require("fs");

// create a file
// fs.writeFile("example.txt", "this is an example", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file has been created");
//     fs.readFile("example.txt", "utf8", (err, file) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(file);
//       }
//     });
//   }
// });

// rename a file
// fs.rename("example.txt", "example2.txt", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file has been renamed");
//   }
// });

// append data to an existing file
// fs.appendFile("example2.txt", "More data is appended", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Data has been appended to the file");
//   }
// });

// delete a file
// fs.unlink("example2.txt", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted file");
//   }
// });

// Create folder and add a file in the folder
// fs.mkdir("myFolder", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile("./myFolder/example.txt", "123", err => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("file created");
//       }
//     });
//   }
// });

// delete folder with file inside it
// fs.unlink("./myFolder/example.txt", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.rmdir("myFolder", err => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("deleted folder");
//       }
//     });
//   }
// });

fs.readdir("folder", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    for (let file of files) {
      fs.unlink("./folder/" + file, err => {
        if (err) {
          console.log(err);
        } else {
          console.log("deleted files");
        }
      });
    }
  }
});
