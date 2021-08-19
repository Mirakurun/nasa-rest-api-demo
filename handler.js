const axios = require('axios');

module.exports.getMarsPhotos = async (event) => {
  const query = event.queryStringParameters;
  const params = {};

  params.earth_date = query.earthDate;
  params.api_key = process.env.API_KEY;

  switch (query.camera) {
    case 'Front Hazard Avoidance Camera':
      params.camera = 'FHAZ';
      break;
    case 'Rear Hazard Avoidance Camera':
      params.camera = 'RHAZ';
      break;
    case 'Mast Camera':
      params.camera = 'MAST';
      break;
    default:
      return {
        statusCode: 400,
        body: 'Invalid camera name.',
      };
  }

  try {
    const { data } = await axios.get(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
      { params }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    throw new Error('internal server error');
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
