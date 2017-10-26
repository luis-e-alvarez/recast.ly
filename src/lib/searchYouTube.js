var searchYouTube = (options, callback) => {
  console.log(options.query);
  $.ajax({url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'JSON',
    data: {
      key: options.key,
      chart: 'mostPopular',
      q: options.query, 
      maxResults: options.max,
      part: 'snippet',
      videoEmbeddable: true,
      type: 'video',
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
