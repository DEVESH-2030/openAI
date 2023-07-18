// configuration of open AI to generate image

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration); // Instantiate OpenAIApi with the configuration

const generateImage = async (req, res) => {
    try {
        const response = await openai.createImage({
            prompt: "A man in nature place and enjoying with coffee at night",
            n: 1,
            size: "512x512"
        });

        const imageUrl = response.data.data[0].url;

        res.status(200).json({
            success: true,
            data: imageUrl
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

        res.status(400).json({
            success: false,
            error: 'The image was not generated',
        });
    }
};

module.exports = { generateImage };
