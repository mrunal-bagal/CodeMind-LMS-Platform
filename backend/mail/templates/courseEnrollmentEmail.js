exports.courseEnrollmentEmail = (courseName, name) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Course Registration Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href=""><img class="logo" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPimpri_Chinchwad_College_of_Engineering&psig=AOvVaw2UonKyw9qGITyGtcz2p7cw&ust=1744434458363000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiW7POaz4wDFQAAAAAdAAAAABAE"
                    alt="CodeMind Logo"></a>
            <div class="message">Course Registration Confirmation</div>
            <div class="body">
                <p>Dear ${name},</p>
                <p>You have successfully registered for the course <span class="highlight">"${courseName}"</span>. We
                    are excited to have you as a participant!</p>
                <p>Please log in to your learning dashboard to access the course materials and start your learning journey.
                </p>
                <a class="cta" href="">Go to Dashboard</a>
            </div>
            <div class="support">If you have any questions or need assistance, please feel free to reach out to us at 
            <a href="mailto:sddudhane8@gmail.com">sddudhane8@gmail.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`;
  };