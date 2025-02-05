const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const requestIp = require('request-ip');
const useragent = require('express-useragent');
app.set('json spaces', 2);
app.use(bodyParser.json());
app.use(requestIp.mw());
app.use(useragent.express());
let teachPhrases = {};
let replyPhrases = {};
const teachJsonFilePath = path.join(__dirname, 'rahad/Teach.json');
const replyJsonFilePath = path.join(__dirname, 'rahad/Reply.json');
function loadTeachPhrases() {
  try {
    const data = fs.readFileSync(teachJsonFilePath, 'utf8');
    teachPhrases = JSON.parse(data);
    console.log("[34m", 'Loaded teach phrases from Teach.json');
  } catch (error) {
    console.log("[31m", 'Error loading teach phrases:', error.message);
  }
}
function loadReplyPhrases() {
  try {
    const data = fs.readFileSync(replyJsonFilePath, 'utf8');
    replyPhrases = JSON.parse(data);
    console.log("[34m", 'Loaded reply phrases from Reply.json');
  } catch (error) {
    console.log("[31m", 'Error loading reply phrases:', error.message);
  }
}
function saveTeachPhrases() {
  fs.writeFile(teachJsonFilePath, JSON.stringify(teachPhrases, null, 2), 'utf8', err => {
    if (err) {
      console.log("[31m", 'Error saving teach phrases to Teach.json');
    } else {
      console.log("[34m", 'Saved teach phrases to Teach.json');
    }
  });
}
function saveReplyPhrases() {
  fs.writeFile(replyJsonFilePath, JSON.stringify(replyPhrases, null, 2), 'utf8', err => {
    if (err) {
      console.log("[31m", 'Error saving reply phrases to Reply.json');
    } else {
      console.log("[32m", 'Saved reply phrases to Reply.json');
    }
  });
}
app.get('/sim', (req, res) => {
  const teachQuery = req.query.teach;
  const replyQuery = req.query.reply;
  const ansQuery = req.query.ans;
  const userLang = req.query.lang;
  const clientIp = req.clientIp;
  const userAgentInfo = req.useragent.source;
  loadTeachPhrases();
  loadReplyPhrases();
  if (teachQuery) {
    teachPhrases[teachQuery] = ansQuery || 'Default response for ' + teachQuery;
    saveTeachPhrases();
    const teachingResponse = {
      author: 'Mohammed Rahad',
      message: 'Successful Teaching server'
    };
    console.log("[33m", '┌──────────────── •✧ • ────────────────┐');
    console.log("[34m", "\n  ____      _    _   _    _    ____  ");
    console.log("[35m", " |  _ \\    / \\  | | | |  / \\  |  _ \\ ");
    console.log("[36m", " | |_) |  / _ \\ | |_| | / _ \\ | | | |");
    console.log("[37m", " |  _ <  / ___ \\|  _  |/ ___ \\| |_| |");
    console.log("[38m", " |_| \\_\\/_/   \\_\\_| |_/_/   \\_\\____/");
    console.log("[34m", "\n   Author: Mohammed Rahad");
    console.log("[37m", `   Message: ${'Successful Teaching server'}`);
    console.log("[34m", `   IP Address: ${clientIp}`);
    console.log("[33m", `   User Agent: ${userAgentInfo}`);
    console.log("[33m", '└──────────────── •✧ • ────────────────┘');
    res.json(teachingResponse);
  } else if (replyQuery) {
    let response = replyPhrases[replyQuery];
    if (!response) {
      response = teachPhrases[replyQuery];
    }
    if (response) {
      const responseObj = {
        author: 'Mohammed Rahad',
        message: response
      };
      console.log("[36m", '┌──────────────── •✧ • ────────────────┐');
      console.log("[32m", "\n  ____      _    _   _    _    ____  ");
      console.log("[33m", " |  _ \\    / \\  | | | |  / \\  |  _ \\ ");
      console.log("[34m", " | |_) |  / _ \\ | |_| | / _ \\ | | | |");
      console.log("[35m", " |  _ <  / ___ \\|  _  |/ ___ \\| |_| |");
      console.log("[36m", " |_| \\_\\/_/   \\_\\_| |_/_/   \\_\\____/");
      console.log("[34m", "\n   Author: Mohammed Rahad");
      console.log("[38m", `   Message: ${responseObj.message}`);
      console.log("[36m", `   IP Address: ${clientIp}`);
      console.log("[34m", `   User Agent: ${userAgentInfo}`);
      console.log("[36m", "\n└──────────────── •✧ • ────────────────┘");
      res.json(responseObj);
    } else {
      const notFoundResponse = {
        author: 'Mohammed Rahad',
        message: '_তুমি উলটা পালটা কথা বললে আমি জবাব দিবো কি জানু-!!😤'
      };
      res.json(notFoundResponse);
      console.log("[36m", '┌──────────────── •✧ • ────────────────┐');
      console.log("[33m", "\n  ____      _    _   _    _    ____  ");
      console.log("[34m", " |  _ \\    / \\  | | | |  / \\  |  _ \\ ");
      console.log("[35m", " | |_) |  / _ \\ | |_| | / _ \\ | | | |");
      console.log("[36m", " |  _ <  / ___ \\|  _  |/ ___ \\| |_| |");
      console.log("[32m", " |_| \\_\\/_/   \\_\\_| |_/_/   \\_\\____/");
      console.log("[31m", "\n   Author: Mohammed Rahad");
      console.log("[31m", `   Message: ${'_তুমি উলটা পালটা কথা বললে আমি জবাব দিবো কি জানু-!!😤'}`);
      console.log("[34m", `   IP Address: ${clientIp}`);
      console.log("[36m", `   User Agent: ${userAgentInfo}`);
      console.log("[38m", '└──────────────── •✧ • ────────────────┘');
    }
  } else {
    if (userLang) {
      // Handle userLang if needed
    }
    const invalidParamsResponse = {
      error: "Invalid query parameters. You can use \"teach\" to teach and \"reply\" to get a response."
    };
    console.log("[35m", '┌──────────────── •✧ • ────────────────┐');
    console.log("[36m", "\n  ____      _    _   _    _    ____  ");
    console.log("[37m", " |  _ \\    / \\  | | | |  / \\  |  _ \\ ");
    console.log("[38m", " | |_) |  / _ \\ | |_| | / _ \\ | | | |");
    console.log("[33m", " |  _ <  / ___ \\|  _  |/ ___ \\| |_| |");
    console.log("[33m", " |_| \\_\\/_/   \\_\\_| |_/_/   \\_\\____/");
    console.log("[34m", "\n     Author: Mohammed Rahad");
    console.log("[37m", `   Message: ${"Invalid query parameters. You can use \"teach\" to teach and \"reply\" to get a response."}`);
    console.log("[34m", `   IP Address: ${clientIp}`);
    console.log("[36m", `   User Agent: ${userAgentInfo}`);
    console.log("[35m", '└──────────────── •✧ • ────────────────┘');
    res.status(400).json(invalidParamsResponse);
  }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("[32m", " [31mRahad [32m [33mServer [32m [36mStart[32m [34mSuccessful\n", '┌──────────────── •✧ • ────────────────┐');
  console.log("[35m", "\n  ____      _    _   _    _    ____  ");
  console.log("[36m", " |  _ \\    / \\  | | | |  / \\  |  _ \\ ");
  console.log("[34m", " | |_) |  / _ \\ | |_| | / _ \\ | | | |");
  console.log("[37m", " |  _ <  / ___ \\|  _  |/ ___ \\| |_| |");
  console.log("[31m", " |_| \\_\\/_/   \\_\\_| |_/_/   \\_\\____/");
  console.log("[32m", "\n└──────────────── •✧ • ────────────────┘\n");
  console.log("[35m", `   Server is running on port ${port}`);
});
