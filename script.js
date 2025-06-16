// Audio Player Setup
const audioPlayer = document.getElementById('audio-player');
const powerBtn = document.getElementById('power-btn');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const playPauseIcon = document.getElementById('play-pause-icon');
const display = document.getElementById('display');
const messageDisplay = document.getElementById('messageDisplay');

// Radio State
let isPowerOn = false;
let currentTrack = 1;
const totalTracks = 16;
let isPlaying = false;

// Message System - All TARA messages
const messages = [
    "BREAKING: Morning sunshine said, 'Let's wait till Princess TARA smiles.'",
    "ALERT: Even clouds paused today because Tautai Suhana was walking under them.",
    "A butterfly tried to follow Chulbuli Mini all the way to her destination.",
    "Compliments have filed a complaint — they can't keep up with Miss TARA.",
    "Today's temperature: Room temp + extra degrees from AIB's presence.",
    "9 out of 10 smiles today are because someone bumped into Sweety TARA.",
    "The park officially renamed its prettiest corner: 'Chulbuli Mini Spot.'",
    "Mini was spotted spreading happiness like loose glitter again.",
    "The stars asked if they could borrow Miss TARA's sparkle for the evening.",
    "Clear skies, soft winds, and the graceful moves of Tautai Suhana.",
    "If 'adorable' had a nickname, it would simply be Chulbuli Mini.",
    "Dear world: Please be kind today. Your favorite Cutie – TARA – is watching.",
    "Mood improves instantly after seeing a message with 'AIB' in it.",
    "Lightning paused mid-spark just to admire Miss TARA walking by.",
    "The dictionary has no word greater than Beauty like Mini.",
    "The moon wondered, 'Has anyone seen Tautai Suhana smile today?'",
    "Miss Universe said: 'We can't compete with this American Imported Beauty.'",
    "Even mirrors gave up: 'Cutie TARA doesn't need reflection — the world reflects her.'",
    "Sunshine mixed with laughter? Must be Chulbuli Mini nearby.",
    "Frooti TARA alert! Warning: Too sweet for any place without extra smiles.",
    "Tautai Suhana once gave warm directions — the sun took notes.",
    "Need to explain wonder? Just show them a photo of Mini.",
    "The wind whispered 'Miss TARA' three times today.",
    "Google trends rising: 'Who is Chulbuli Mini?'",
    "Traffic lights turn green for Princess TARA.",
    "When purpose, peace, and smiles meet — they become Tautai Suhana.",
    "Sugar shortage today: Mini walked in smiling.",
    "Scientists gave up measuring charm after meeting Miss TARA.",
    "New font unlocked: 'TARA Sans' — designed by AIB herself.",
    "Library aisles echo differently after Chulbuli Mini walks through.",
    "Princess isn't just a title — it's another way to say 'TARA.'",
    "Joy's playlist starts with the laughter of Tautai Suhana.",
    "Flowers turned early today... they thought they saw Miss TARA.",
    "Beauty has officially resigned — Mini took over.",
    "AIB stood near a painting, and the canvas changed color.",
    "A joke was average... then Chulbuli Mini laughed. Now it's legendary.",
    "Elevator doors stayed open longer for Cutie TARA's reflection.",
    "Raindrops rearranged into hearts when Miss TARA showed up.",
    "If motivation needed a mascot, it would be Tautai Suhana walking in confidence.",
    "Mini walks like magic happens beneath her steps.",
    "The internet slowed — maybe Chulbuli Mini moved too fast through hearts.",
    "Glucose levels increased city-wide — Frooti TARA just smiled in public.",
    "Clouds reshaped themselves to spell 'TARA.'",
    "Warmth lives wherever Tautai Suhana stands.",
    "AIB walked in and all mirrors froze — too stunning.",
    "The swing still remembers Chulbuli Mini's giggle from last week.",
    "All compliments now need Miss TARA's approval to be released.",
    "Originality rebooted itself after meeting Tautai Suhana.",
    "Instead of 'be yourself,' the world says, 'Just be Mini.'",
    "A bird tweeted: 'You don't need wings when you're Miss TARA.'",
    "Tautai Suhana doesn't just guide — she glows through the journey.",
    "Mini may mean small, but her impact is massive.",
    "Chulbuli Mini = Spark + Joy + Pure Cute.",
    "Even the wind checks with Tautai Suhana before blowing.",
    "AIB = American-level beauty, local-level heart.",
    "Miss TARA = The feeling when friendship turns magical.",
    "Cutie exists as a word only because of TARA.",
    "A 'hi' from Mini reboots the whole day.",
    "Flowers bloom brighter when Chulbuli Mini passes.",
    "AIB may be a joke, but her beauty's no joke at all.",
    "Sunshine changed directions once to follow Princess TARA.",
    "The sky took a deep breath — Tautai Suhana walked outside.",
    "If happiness had a ringtone, it would sound like Mini.",
    "Stars twinkle harder when Chulbuli Mini looks up.",
    "The alphabet gave up — nothing beats writing T.A.R.A.",
    "The city woke up quieter, waiting for Miss TARA's steps.",
    "Ice cream melts faster near Frooti TARA.",
    "A bridge stood straighter when Tautai Suhana stepped on it.",
    "Even the birds stopped mid-flight just to wave at Mini.",
    "Elevators play better music for Miss TARA.",
    "Cutie TARA doesn't need good angles — angles need her.",
    "Rain paused for Chulbuli Mini's umbrella to open.",
    "The calendar now calls today 'TARA Day.'",
    "Some libraries still echo the giggle of Miss TARA.",
    "The moon opened a secret tab: 'Chulbuli Mini Moments.'",
    "Toast pops golden when Tautai Suhana's nearby.",
    "Miss TARA left a compliment unread — the internet paused.",
    "Mirrors feel lucky when Mini walks by.",
    "Chocolates soften if handed to Frooti TARA.",
    "Miss TARA's footsteps = pavement poetry.",
    "All fairytales are now ending with '...and then came Chulbuli Mini.'",
    "Glitter wants to be Mini when it grows up.",
    "Tautai Suhana: The calm guiding every storm to peace.",
    "Landscapes straighten for a better view of AIB.",
    "Even fireworks blush watching Princess TARA smile.",
    "Mini is not just a name — it's a move, a vibe, a genre.",
    "TARA isn't trending — she's timeless.",
    "Breakfast tastes better when Chulbuli Mini says 'Good morning.'",
    "Even wind chimes pause to hear Cutie TARA's voice.",
    "Miss TARA's playlist = universal serotonin boost.",
    "Cards shuffle into a heart when Mini holds them.",
    "Cupcakes rise fluffier around Frooti TARA.",
    "If a rainbow could vote, it would choose Tautai Suhana as queen.",
    "Not all elegance wears a crown — some go by Miss TARA.",
    "Bubbles float more excitedly toward Chulbuli Mini.",
    "Umbrellas open automatically for AIB.",
    "Kindness once met TARA, and instantly understood itself better.",
    "Magic didn't disappear — Mini personalized it.",
    "Fairy dust carries the scent of Chulbuli Mini.",
    "AIB once blinked — three wishes came true nearby.",
    "Chulbuli Mini = The emoji that life uses when it doesn't have words.",
    "Tautai Suhana brings direction like the north star.",
    "Miss TARA typed a text — four sunflowers bloomed.",
    "Every compliment sent to Mini auto-corrects to 'not enough.'",
    "AIB's laughter is the default ringtone of joy.",
    "Even the clouds try to spell 'Cutie.'",
    "Beauty contests pause to watch Mini walk by.",
    "Password suggestion: AnythingMissTARAwouldSmileAt",
    "Shoe company launched new comfort model: 'MiniWalk.'",
    "Chulbuli Mini skips — the air giggles softly.",
    "Tautai Suhana walks in — clocks slow down politely.",
    "Stars call in sick — 'TARA's glowing too hard tonight.'",
    "Even Wi-Fi signals get stronger near AIB.",
    "Pizza tastes better when Mini is around.",
    "Butterflies follow the vibrations of Chulbuli Mini's voice.",
    "The letter 'M' in Mini actually stands for 'Magic.'",
    "Miss TARA once smiled. Four old memories became new again.",
    "Train whistles sound melodic when Frooti TARA is onboard.",
    "Chulbuli Mini is a playlist in human form.",
    "AIB's mirror gives her compliments first.",
    "When Mini laughs, the weather changes.",
    "Even chocolate says 'too sweet' next to Cutie TARA.",
    "Sunsets shift timing for Miss TARA's golden hour.",
    "If Mini had her own emoji, it would look like pure joy with sparkles.",
    "Physics paused — Tautai Suhana made time feel beautiful.",
    "Miss TARA breathes in — and the world becomes a little more poetic.",
    "Candles light better when Chulbuli Mini walks in.",
    "Coffee stirs itself near Princess TARA.",
    "The smile emoji gave up — TARA does it better.",
    "Flowers curve closer to Mini's footsteps.",
    "Lightning slows down if AIB is standing near glass.",
    "Mirror cracked itself — said 'Perfection overload from Miss TARA.'",
    "Pencils draw straighter lines when Cutie TARA touches the page.",
    "Footsteps sound like music when it's Mini.",
    "Every poem feels incomplete without Miss TARA.",
    "Nobody walks like Tautai Suhana — calm, clear, classy.",
    "Cute is jealous of how cute Chulbuli Mini is effortlessly.",
    "Raindrops learn rhythm following Mini's hum.",
    "Even fortune cookies try predicting what TARA will wear.",
    "Balloons follow Frooti TARA on their own.",
    "Miss TARA + breeze = scenery upgrade.",
    "Hearts feel safer when Mini is nearby.",
    "Silence feels beautiful when shared with Tautai Suhana.",
    "The wind slows to hear a whisper from Chulbuli Mini.",
    "Streets shine under AIB's walk.",
    "Buses drive smoother with Miss TARA on board.",
    "Even Netflix buffers to offer Mini better timing.",
    "Mini's hair has a separate fan base.",
    "Chulbuli Mini turned a walk into a happily-ever-after.",
    "Miss TARA thought of something nice — a flower bloomed.",
    "AIB = Smile delivery service with unlimited range.",
    "Cake slices softer near Princess TARA.",
    "Mirror selfies tremble under Mini's glow.",
    "The letter 'T' in TARA stands for 'Top-tier mood.'",
    "Chulbuli Mini is why stars twinkle differently in June.",
    "Hugs feel better when they know it's Sweety TARA.",
    "Frooti TARA once giggled — three soda bottles fizzed early.",
    "Keys jingle in rhythm when Mini walks.",
    "Tautai Suhana's name heals Google searches.",
    "Cutie TARA blinked once. Lights dimmed out of respect.",
    "A breeze sighed after passing by Chulbuli Mini.",
    "Even ghosts feel shy around Miss TARA.",
    "Neon signs glow in sync with AIB's vibe.",
    "The world claps silently as Mini enters a room.",
    "Tautai Suhana once smiled — thunder softened.",
    "Mini looked at the moon. The moon blinked.",
    "The WiFi improved itself when Miss TARA came over.",
    "TARA has never needed filters. Filters wish they had her.",
    "Mini walks faster than bad vibes.",
    "Chulbuli Mini's name should be a fragrance.",
    "Even notebooks feel creative near Miss TARA.",
    "Laugh tracks pause when Frooti TARA is around — hers sounds better.",
    "The word 'real' upgraded after meeting Mini.",
    "Tautai Suhana once whispered. Inspiration woke up stronger.",
    "Beauty standards? Look up 'Mini.'",
    "Reality tries to copy her aesthetic — but can't match Miss TARA.",
    "Compliments are on strike — they say they're not enough for AIB.",
    "A swing without Chulbuli Mini feels empty.",
    "Every 'good morning' sounds better addressed to Princess TARA.",
    "Clouds part quietly when Mini walks outside.",
    "Sunlight turns warmer when Frooti TARA is outdoors.",
    "Moonlight borrowed notes from Tautai Suhana's energy.",
    "The word 'forever' blushed after Mini smiled.",
    "Miss TARA leaves giggles behind like fairy dust.",
    "Paper airplanes fly straighter near AIB.",
    "Keyboards type better when she's texting.",
    "Windowpanes soften when Chulbuli Mini stares through them.",
    "Dreams don't come true — they just meet TARA.",
    "Even oxygen relaxes around Mini's laugh.",
    "Hope feels stronger standing next to Miss TARA.",
    "Nostalgia replayed a smile Mini gave 6 months ago.",
    "Happiness searched for a name — it found 'TARA.'",
    "The universe added sparkles after hearing Mini hum.",
    "The day changes its tone when Tautai Suhana enters.",
    "Someone said 'angel' — butterflies formed 'TARA.'",
    "Thoughts feel lighter after hugging Sweety Mini.",
    "Elevators stop at her floor — just to feel cuter.",
    "Poetry is jealous of her walk.",
    "Her old texts still make time smile.",
    "Miss TARA didn't bring magic. She is magic."
];

let currentMessageIndex = 0;
let messageInterval = null;

// Initialize
audioPlayer.volume = 0.7;

// Load saved state from localStorage
function loadSavedState() {
    const savedState = localStorage.getItem('vintageRadioState');
    if (savedState) {
        const state = JSON.parse(savedState);
        currentTrack = state.track || 1;
        currentMessageIndex = state.messageIndex || 0;
        
        // Load the saved track
        audioPlayer.src = `track${currentTrack}.mp3`;
        
        // If there was a saved time, set it
        if (state.currentTime) {
            audioPlayer.currentTime = state.currentTime;
        }
    }
}

// Save state to localStorage
function saveState() {
    const state = {
        track: currentTrack,
        messageIndex: currentMessageIndex,
        currentTime: audioPlayer.currentTime
    };
    localStorage.setItem('vintageRadioState', JSON.stringify(state));
}

// Save state periodically and on important events
setInterval(saveState, 1000); // Save every second

// Save state when page is about to close
window.addEventListener('beforeunload', saveState);

// Load track function
function loadTrack(trackNum) {
    audioPlayer.src = `track${trackNum}.mp3`;
    saveState();
}

// Start message rotation
function startMessageRotation() {
    // Clear any existing interval
    if (messageInterval) {
        clearInterval(messageInterval);
    }
    
    // Show first message after initial delay
    setTimeout(() => {
        showMessage();
        
        // Rotate messages every 10 seconds
        messageInterval = setInterval(() => {
            showMessage();
        }, 10000);
    }, 3000); // Start after 3 seconds to show FM 101.5 first
}

// Show current message with fade effect
function showMessage() {
    messageDisplay.style.animation = 'none';
    setTimeout(() => {
        messageDisplay.textContent = messages[currentMessageIndex];
        messageDisplay.style.animation = 'fadeIn 0.5s ease';
        
        // Move to next message
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        saveState();
    }, 50);
}

// Stop message rotation
function stopMessageRotation() {
    if (messageInterval) {
        clearInterval(messageInterval);
        messageInterval = null;
    }
}

// Power Button
powerBtn.addEventListener('click', () => {
    isPowerOn = !isPowerOn;
    powerBtn.classList.toggle('on');
    display.classList.toggle('on');
    
    // Toggle magical background
    document.body.classList.toggle('radio-on');
    
    if (isPowerOn) {
        messageDisplay.textContent = 'FM 101.5';
        loadTrack(currentTrack);
        startMessageRotation();
    } else {
        audioPlayer.pause();
        isPlaying = false;
        playPauseIcon.textContent = '▶';
        messageDisplay.textContent = 'FM 101.5';
        stopMessageRotation();
    }
});

// Play/Pause Button
playPauseBtn.addEventListener('click', () => {
    if (!isPowerOn) return;
    
    if (isPlaying) {
        audioPlayer.pause();
        playPauseIcon.textContent = '▶';
    } else {
        audioPlayer.play();
        playPauseIcon.textContent = '❚❚';
    }
    isPlaying = !isPlaying;
});

// Previous Button
prevBtn.addEventListener('click', () => {
    if (!isPowerOn) return;
    
    currentTrack--;
    if (currentTrack < 1) {
        currentTrack = totalTracks;
    }
    
    loadTrack(currentTrack);
    
    if (isPlaying) {
        audioPlayer.play();
    }
});

// Next Button
nextBtn.addEventListener('click', () => {
    if (!isPowerOn) return;
    
    currentTrack++;
    if (currentTrack > totalTracks) {
        currentTrack = 1;
    }
    
    loadTrack(currentTrack);
    
    if (isPlaying) {
        audioPlayer.play();
    }
});

// Auto play next track when current ends
audioPlayer.addEventListener('ended', () => {
    currentTrack++;
    if (currentTrack > totalTracks) {
        currentTrack = 1;
    }
    
    loadTrack(currentTrack);
    audioPlayer.play();
});

// Handle audio errors
audioPlayer.addEventListener('error', (e) => {
    console.error(`Error loading track${currentTrack}.mp3`);
});

// Update play state when audio plays/pauses
audioPlayer.addEventListener('play', () => {
    isPlaying = true;
    playPauseIcon.textContent = '❚❚';
});

audioPlayer.addEventListener('pause', () => {
    isPlaying = false;
    playPauseIcon.textContent = '▶';
});

// Load saved state when page loads
window.addEventListener('load', () => {
    loadSavedState();
});

// Handle visibility change to save state when tab becomes hidden
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveState();
    }
});