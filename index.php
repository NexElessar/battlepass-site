<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Battle Pass</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #2b1f1d;
            color: #f0e6d2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            width: 700px;
            background-color: #3a2e2a;
            border: 2px solid #c8a165;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        .title {
            color: #ffd700;
            font-size: 24px;
        }
        .progress-bar {
            background-color: #555;
            width: 100%;
            height: 20px;
            border-radius: 10px;
            margin-top: 10px;
            position: relative;
        }
        .progress {
            width: 70%; /* Örneğin %70 ilerleme */
            height: 100%;
            background-color: #6ac045;
            border-radius: 10px;
            text-align: center;
            color: #000;
        }
        .reward-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-top: 20px;
        }
        .reward-item {
            background-color: #4c3b35;
            border: 1px solid #c8a165;
            padding: 10px;
            border-radius: 10px;
        }
        .reward-item img {
            width: 40px;
            height: 40px;
        }
        .claim-btn {
            background-color: #444;
            color: #f0e6d2;
            padding: 5px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<div class="container">
    <h1 class="title">Battle Pass</h1>
    <div class="progress-bar">
        <div class="progress">70/100</div>
    </div>
    <div class="reward-grid">
        <?php
        // Ödülleri PHP ile dinamik olarak listeleyin
        $rewards = [
            ["name" => "Intelligence Scroll", "quantity" => 2, "status" => "claimed"],
            ["name" => "Strength Scroll", "quantity" => 2, "status" => "claimed"],
            ["name" => "MP Increase Scroll", "quantity" => 2, "status" => "not enough"],
            ["name" => "HP Increase Scroll", "quantity" => 2, "status" => "not enough"],
        ];

        foreach ($rewards as $reward) {
            echo '<div class="reward-item">';
            echo '<img src="reward_icon.png" alt="' . $reward['name'] . '">'; // Ödül simgesi
            echo '<p>' . $reward['name'] . '</p>';
            echo '<p>Quantity: ' . $reward['quantity'] . '</p>';
            if ($reward['status'] === "claimed") {
                echo '<button class="claim-btn" disabled>Claimed</button>';
            } else {
                echo '<button class="claim-btn">Claim</button>';
            }
            echo '</div>';
        }
        ?>
    </div>
</div>

</body>
</html>
