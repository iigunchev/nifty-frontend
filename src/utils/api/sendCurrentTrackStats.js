const sendCurrentTrackStats = async (trackId, userId, mobile = false) => {
  try {
    const token = process.env.REACT_APP_STATS_API_KEY;
    const body = JSON.stringify({
      trackId,
      userId,
      agent: mobile ? 'mobile' : 'pc'
    });

    const response = await fetch(
      `${process.env.REACT_APP_STATS_URL}/newplayback`,
      {
        method: 'POST',
        headers: {
          'x-api-token': token,
          'Content-Type': 'application/json'
        },
        body
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch API');
    }
  } catch (e) {
    throw Error(e.message);
  }
};

export default sendCurrentTrackStats;
