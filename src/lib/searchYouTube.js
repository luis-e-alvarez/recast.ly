var searchYouTube = (options, callback) => {
  $.ajax({url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'JSON',
    data: {
      key: options.key,
      chart: 'mostPopular',
      q: options.query, 
      maxResults: options.max,
      part: 'snippet',
    },
    success: function(data) {
      callback(data.items);
    },
    error: function() {
      console.log('Failed');
    }
  });
};


window.searchYouTube = searchYouTube;
