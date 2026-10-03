const ImageKit = require('@imagekit/nodejs')

const imageKit = new ImageKit ({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

async function uploadFile(buffer) {
    const result = await imageKit.files.upload({
        file: buffer.toString("base64") ,
        fileName: "image.jpeg"
    })
    return result;
}

module.exports = uploadFile;