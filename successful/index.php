<?php
	include_once("../pnk/xmliohelper.php");
	$xml = new xmliohelper('../Data.xml');
	$response = file_get_contents('https://pinclick.com/admin/property/row/json/seourl/'.$xml->GetValueFromDom('DATA SEOURL'));
	$response = json_decode($response);
	$array = json_decode(json_encode($response), True);
	$data = $array['searchdetail']['rows'][0];
	$success_url = $data['success_url'];
	
	$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	//$main_link = str_replace('/successful', '', $actual_link);
	$main_link = substr($actual_link, 0, strrpos($actual_link, '/successful'));
	
	//echo "@@@@@@@@@@@@@".$main_link;
?>

<!DOCTYPE html>
<html>

<head>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    </script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">

    <script>
        $(document).ready(function () {
            $("#exampleModalCenter").modal('show');
            $(".modal-backdrop.in").hide();
        });

        var url = window.location.href;
        // var lastChar = url.substr(3, url.indexOf('/'));
        url = url.split('?')[1];
        console.log(url);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'lead', 'lead_info': url
        })

		//dataLayer.push({'event':'lead','lead_info':url})
    </script>
</head>

<body>
    <!--button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
        Launch demo modal
    </button-->

    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <!-- <div class="modal-header">

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                </div> -->
                <div class="redo">X</div>
                <div class="modal-body">
                    <div class="modal-body-div">
                        <input type="hidden" name="success_url" id="success_url"
                            value="<?php echo (isset($success_url))?$success_url:'';?>" />
                        <input type="hidden" name="main_url" id="main_url"
                            value="<?php echo (isset($main_link ))?$main_link :'';?>" />
                        <img src="successq.gif" class="modal-img" />
                        <h3 class="modal-msg">Thank You</h3>
                        <h3 class="modal-msg1">For submitting your details!</h3>
                        <h3 class="modal-msg2">Our team will get in touch with you for further process</h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <script src="js/index.js"></script>
	<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WTJVVF5');</script>
<!-- End Google Tag Manager -->
</body>

</html>