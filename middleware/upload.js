const { S3Client } = require("@aws-sdk/client-s3");

const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");

    
let s3 = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'AKIASZQHDWA5BE3362GN',
    secretAccessKey: '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',
  },
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: "v4",
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'teamrocket',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname, contentType: file.mimetype });
    },
    key: function (req, file, cb) {
      cb(
        null,
        Date.now().toString() +
          path.parse(file.originalname).name +
          path.extname(file.originalname)
      );
    },
  }),
});

module.exports = upload




// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/pdf.html");
// });

// app.post("/upload", upload.single("pdfFile"), async (req, res) => {
//     try {
//       console.log(req.file.location);
  
//       const pdf = new Pdf(req.file);
//       await pdf.save();
  
//       res.send({ result: "Uploaded", url: pdf.location });
//     } catch {
//       res.send("Something went wrong");
//     }
//   });
  

// app.get("/pdf/:id", async (req, res) => {
//     try {
//       const pdf = await Pdf.findById(req.params.id);
//       const s3ReadStream = s3.getObject({
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: pdf.key,
//       }).createReadStream();
//       res.setHeader("Content-Type", "application/pdf");
//       s3ReadStream.pipe(res);
//     } catch {
//       res.send("Something went wrong");
//     }
//   });
  

// app.listen(3200, () => {
//     console.log("Server started at http://localhost:3200");
//   });
  