const path = require('path');
const ghpages = require("gh-pages");

ghpages.publish(
    path.resolve(__dirname, 'dist'),
    {
        branch: "gh-pages",
        repo: "https://github.com/Changtingweiyuanyuan/vue2-components.git",
        message: "[ci] deploy to github pages",
    },
    (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log(path.resolve(__dirname, 'dist'),"Deployment to GitHub pages complete");
        }
    }
);
