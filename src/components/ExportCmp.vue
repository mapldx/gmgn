<!-- eslint-disable-->
<template>
  <main>
    <canvas id="myCanvas" width="512" height="512" style="border:1px solid #000000;"></canvas>
  </main>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ExportCmp',
  data() {
    return {
      address: null,
      top_chain: '',
    };
  },
  metaInfo() {
    return {
      meta: [
        { name: 'title', content: 'gm/gn: your 2022 blockchain wrapped' },
        { name: 'description', content: 'Inspired by Spotify Wrapped, gm/gn is a compilation of data about your cross-chain activity over the past year. Short for good morning/good night, gm/gn is a term to promote positivity and friendship among the Web 3 community.' },
        { property: 'og:url', content: 'https://gmgn.today' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'gm/gn: your 2022 blockchain wrapped' },
        { property: 'og:description', content: 'Inspired by Spotify Wrapped, gm/gn is a compilation of data about your cross-chain activity over the past year. Short for good morning/good night, gm/gn is a term to promote positivity and friendship among the Web 3 community.' },
        { property: 'og:image', content: 'https://i.imgur.com/KjNQjQu.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'gmgn.today' },
        { property: 'twitter:url', content: 'https://gmgn.today' },
        { name: 'twitter:title', content: 'gm/gn: your 2022 blockchain wrapped' },
        { name: 'twitter:description', content: 'Inspired by Spotify Wrapped, gm/gn is a compilation of data about your cross-chain activity over the past year. Short for good morning/good night, gm/gn is a term to promote positivity and friendship among the Web 3 community.' },
        { name: 'twitter:image', content: 'https://i.imgur.com/KjNQjQu.png' },
      ],
    };
  },
  mounted() {
    document.title = '2022 Blockchain Wrapped';
    this.canvas(this.$route.query.top_chain, this.$route.query.total_days, this.$route.query.on_1, this.$route.query.txs_on_1, this.$route.query.on_2, this.$route.query.txs_on_2,
      this.$route.query.number_tx, this.$route.query.max_day);
  },
  methods: {
    canvas(top_chain, total_days, on_1, txs_on_1, on_2, txs_on_2, number_tx, max_day) {
      var canvas = document.getElementById("myCanvas")
      var ctx = canvas.getContext("2d")
      var base_image;
      canvas.width = canvas.clientWidth * 1.5
      canvas.height = canvas.clientHeight * 1.25
      ctx.scale(2,2);
      drawBG()
      function drawBG() {

          base_image = new Image();
          base_image.src = '/logo.png';

          base_image.onload = function () {
              ctx.drawImage(base_image, 15, 20, 110, 32);
              base_image.setAttribute('crossorigin', 'anonymous');

              ctx.globalCompositeOperation = 'destination-over';

              ctx.fillStyle = "#2F3C7E";
              ctx.fillRect(0,0, canvas.width,canvas.height);

              ctx.globalCompositeOperation = 'source-over';

              ctx.fillStyle = '#FBEAEB'
              ctx.textAlign = 'right'
              ctx.font = 'bold 10px Arial'

              wrapText(ctx, '🎉 Your 2022 Blockchain Wrapped', 370, 45);
              ctx.fillStyle = '#8AAAE5'
              wrapText(ctx, 'at https://gmgn.today', 370, 48);

              //settings
              ctx.fillStyle = '#FBEAEB'
              ctx.textAlign = 'left'

              var maxWidth = 500;
              var lineHeight = 500;
              
              ctx.font = 'bold 17px Arial'
              ctx.fillStyle = '#8AAAE5'
              wrapText(ctx, 'My Top Chain 🔗', 20, 110);
              wrapText(ctx, 'Active for', 290, 95);

              ctx.font = 'bold 25px Arial'
              ctx.fillStyle = '#FBEAEB'
              wrapText(ctx, top_chain, 20, 130);
              
              ctx.textAlign = 'right'
              wrapText(ctx, total_days + '%', 375, 123);

              ctx.font = 'bold 10px Arial'
              wrapText(ctx, 'of the year 📅', 370, 150);

              ctx.textAlign = 'left'

              ctx.font = 'bold 55px Arial'
              wrapText(ctx, txs_on_1, 20, 200);

              ctx.font = 'bold 12px Arial'
              ctx.fillStyle = '#8AAAE5'
              wrapText(ctx, `🥇 txs on ` + on_1, 20, 230);

              ctx.font = 'bold 55px Arial'
              ctx.fillStyle = '#FBEAEB'
              wrapText(ctx, txs_on_2, 20, 280);

              ctx.font = 'bold 12px Arial'
              ctx.fillStyle = '#8AAAE5'
              wrapText(ctx, '🥈 txs on ' + on_2, 20, 310);

              ctx.textAlign = 'right'

              ctx.font = 'bold 55px Arial'
              ctx.fillStyle = '#FBEAEB'
              wrapText(ctx, number_tx, 385, 200);

              ctx.font = 'bold 12px Arial'
              ctx.fillStyle = '#8AAAE5'
              wrapText(ctx, '🧮 total transactions', 370, 220);

              ctx.font = 'bold 55px Arial'
              ctx.fillStyle = '#FBEAEB'
              wrapText(ctx, max_day, 385, 280);

              ctx.font = 'bold 12px Arial'
              ctx.fillStyle = '#8AAAE5'
              wrapText(ctx, '🤌 highest transactions in a day', 370, 310);

              var gh = canvas.toDataURL('png');

              var a  = document.createElement('a');
              a.href = gh;
              a.download = '2022 Blockchain Wrapped.png';

              a.click()
          }

      }
      function wrapText(context, text, x, y, maxWidth, lineHeight) {
          var words = text.toString().split(' ');
          var line = '';

          //pull Y point : //depend on font size
          var perLine    = 4
          var lines_num  = parseInt(words.length / perLine)
              y =  y - (lines_num * 10)
              //---end

          for(var n = 0; n < words.length; n++) {
              var testLine = line + words[n] + ' ';
              var metrics = context.measureText(testLine);
              var testWidth = metrics.width;

              if (testWidth > maxWidth && n > 0) {
                context.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
              }
              else
                line = testLine;
          }

          context.fillText(line, x, y);
          return false
      }
    },
  }
};
</script>
