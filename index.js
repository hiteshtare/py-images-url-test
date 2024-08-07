// run `node index.js` in the terminal

console.log(`Demo in Node.js v${process.versions.node}! to get Images Dimension & Size`);

const url = require("url");
const https = require("https");

const sizeOf = require("image-size");

//Import test data for Books
var testDataForAudio = [
  {
    "UID": 987647,
    "Post Title": "Peace and Prosperity through Kriya Yoga",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/06/tl-peace-and-prosperity-through-kriya-yoga-by-swami-ishwarananda-giri-featured-image-987647.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987651,
    "Post Title": "Making God the Companion of Our Lives",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-making-god-the-companion-of-our-lives-by-swami-pavitrananda-giri-featured-image-987651.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 868310,
    "Post Title": "Importance of Sadhana and Seva for a Devotee",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-importance-of-sadhana-and-seva-for-a-devotee-by-swami-ishwarananda-giri-featured-image-868310.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987670,
    "Post Title": "Discovering Our Immortal Nature",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/06/Jayananda-Discovering-Our-Immortal-Nature-YT.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987664,
    "Post Title": "Change Yourself Through Yoga — International Day of Yoga Talk and Guided Meditation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/06/2024-6-21-Ranjana-Change-Yourself-Through-Yoga-Int-Yoga-Day-1.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987665,
    "Post Title": "The Eternal Love of God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/06/YSS-Online-Inspirational-Satsanga-Priya-Mai-June15-2024-Banner-1.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987666,
    "Post Title": "The Kriya Yoga Path of Divine Living",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/06/The-Kriya-Yoga-Path-Swami-Chidananda-Giri-YT.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987667,
    "Post Title": "Overcoming Fears and Mental Ruts: Using the Mind to Free the Mind",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/05/Govindananda-Overcoming-Fears-and-Mental-Ruts-YT.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987668,
    "Post Title": "Taking Control of Your Life’s Destiny",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/05/2024-5-24-Vishwananda-Taking-Control-of-Your-Lifes-Destiny-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987669,
    "Post Title": "Do We Live One or Many Lives?",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/05/Padmananda-Do-We-Live-One-or-Many-Lives-YT.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987644,
    "Post Title": "The Mother Aspect of God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/05/2024-5-10-swami-Anandamoy-Mother-Aspect-of-God.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987645,
    "Post Title": "Change Your Habits",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/05/Anantananda-Change-Your-Habits.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987646,
    "Post Title": "The True Meaning of Salvation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/04/Nakulananda-True-Meaning-of-Salvation-Email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987648,
    "Post Title": "Choosing to Be Happy",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Ishtananda-Choosing-to-be-Happy.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987649,
    "Post Title": "Look Always to the Light",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Look-Always-to-the-Light-Mrinalini-Mata.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987650,
    "Post Title": "Forging Divine Consciousness in the Fires of Daily Existence",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Bhumananda-Forging-Divine-Consciousness-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987652,
    "Post Title": "Growing in Faith and Unconditional Love",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Sr-Bhakti-Growing-in-Faith-and-Unconditional-Love-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987653,
    "Post Title": "Experiencing the Nature of the Soul",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Saralananda-Experiencing-the-Nature-of-the-Soul-Email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987654,
    "Post Title": "The Purpose of Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Satyananda-The-Purpose-of-Life.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 838316,
    "Post Title": "Experiencing the Grace, Love, Guidance, and Eternal Friendship of the Guru",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Experiencing-Creative-round-3-thumbnail.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 876600,
    "Post Title": "Behind the Physical Cosmos: A World of Light and Energy",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Prafullananda_Behind-the-Physical-Cosmos-thumbnail.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 866639,
    "Post Title": "The New Year: A Time for Spiritual Renewal",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2023-12-29-Anandamoy-The-New-Year.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 824265,
    "Post Title": "The Way to Lasting Peace and Happiness",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Sri-Ranjana-The-Way-to-Lasting-Peace-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 862855,
    "Post Title": "Ways to Conquer Fear",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Brother-Nikhilananda-Ways-to-Conquer-Fear-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 824593,
    "Post Title": "Dynamic Will Can Change Your Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Dynamic-Will-Anandamoy-03.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 877991,
    "Post Title": "Seeing God in All People and in All Conditions",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Sevananda-Seeing-God-in-All-People-blog-yt.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 827066,
    "Post Title": "Giving Thanks for Life's Blessings",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-giving-thanks-for-lifes-blessings-by-swami-ishtananda-giri-featured-image-827066.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 806570,
    "Post Title": "The Importance of Prayer",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Bro-Kamalananda-The-Importance-of-Prayer-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 817342,
    "Post Title": "The Bhagavad Gita: Masterful Guide for Everyday Spiritual Living",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/The-Bhagavad-Gita_Chd.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 811512,
    "Post Title": "Address at the Release of Hindi Translation of “God Talks With Arjuna: The Bhagavad Gita”",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-address-at-the-release-of-hindi-translation-of-god-talks-with-arjuna-the-bhagavad-gita-by-sri-sri-swami-chidananda-giri-featured-image-811512.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 863302,
    "Post Title": "Mastering Your Habits",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YSS-Online-Inspirational-Satsanga-28-October-2023.jpeg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 801015,
    "Post Title": "Making Our Inner Relationship With God More Dynamic",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Satyananda-Making-Our-Inner-Relationship-with-God-Email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 868673,
    "Post Title": "Karma Yoga: Balancing Activity and Meditation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YSS-Karma-Yoga-Balancing-Activity-And-Meditation-by-Sri-Sri-Daya-Mata-October-13-2023-YouTube-Banner-3.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 831123,
    "Post Title": "How to Be a Friend to All",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-how-to-be-a-friend-to-all-by-swami-sevananda-giri-featured-image-831123.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 856760,
    "Post Title": "How to Rise Above Pressures and Problems",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Sister-Ranjana-How-to-Rise-Above-Email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 863994,
    "Post Title": "A Spiritual Approach to World Peace",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Bhumananda-A-Spiritual-Approach-to-World-Peace-Email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 833072,
    "Post Title": "Kriya Yoga: Portal to the Infinite",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Anandamoy_KriyaYoga_Portal-to-the-Infinite-YSS.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 880779,
    "Post Title": "How to Commune With God Through Devotion",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Jayananda-Giri-1.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 818789,
    "Post Title": "A Spiritual Approach to Family Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YSS-Online-Inspirational-Satsanga-%E2%80%93-A-Spiritual-Approach-to-Family-Life-by-Priya-Mai.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 898110,
    "Post Title": "A Heart Aflame — Developing a Loving Relationship With God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-a-heart-aflame-developing-a-loving-relationship-with-god-by-sri-sri-daya-mata-featured-image-898110.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 892280,
    "Post Title": "The Spiritual Art of Getting Along With Others",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Nakulananada-The-Spiritual-Art-of-Getting-Along-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 869248,
    "Post Title": "Workshop: Finding Spiritual Balance in Your Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-workshop-finding-spiritual-balance-in-your-life-by-ranjana-mai-featured-image-869248.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 875157,
    "Post Title": "Developing an Unconquerable Will",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Achalananda-Giri_for-email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 884246,
    "Post Title": "Finding God in Family Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Ishtananda-Giri.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 847298,
    "Post Title": "How Devotion Reveals the Invisible God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Bro-Kamalananda-How-Devotion-Reveals-the-Invisible-God-YT-banner.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 817928,
    "Post Title": "Self-Esteem: A Spiritual Perspective",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Mukti-Mata-Self-Esteem-A-Spiritual-Perspective-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 877244,
    "Post Title": "What Is Salvation?",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Prafullananda-What-Is-SalvationYT.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 875182,
    "Post Title": "The Mother Aspect of God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Bhumananda-The-Mother-Aspect-of-God-YT.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 830469,
    "Post Title": "How to Perceive God’s Presence in the Stillness of Meditation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Saralananda-How-to-Perceive-Gods-Presence-yt.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 825449,
    "Post Title": "The Purpose of Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Nakulananda-The-Purpose-of-Life-YouTube-video-1.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 854306,
    "Post Title": "Creating World Unity Through Yoga Meditation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Ritananda-Creating-World-Unity-Email-yt.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 809279,
    "Post Title": "The Importance of a True Guru",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Anandamoy-giri-The-Importance-of-a-True-Guru-yt.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 883460,
    "Post Title": "The Personal Approach to God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YSS-Online-Inspirational-Satsanga-Swami-Bhaktananda-Giri.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 867141,
    "Post Title": "Sustaining a Joyful Heart in Times of Adversity",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Bro-Sevananda-Sustaining-a-Joyful-Heart-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 874822,
    "Post Title": "Building Our Relationships on a Spiritual Foundation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Bhakti-Building-Our-Relationships-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 818451,
    "Post Title": "Finding Joy in Plain Living and High Thinking",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Bro-Satyananda-Finding-Joy-in-Plain-Living-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 843218,
    "Post Title": "Removing Mental Ruts With New Ways of Living",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Brother-Vishwananda-Removing-Mental-Ruts-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 836731,
    "Post Title": "Developing Dynamic Will Power",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Bro-Govindananda-Developing-Dyn-Will-Power-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 863666,
    "Post Title": "Concentration: Key to Communion with God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Ishtananda-Key-to-Communion-with-God-Email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 833022,
    "Post Title": "Coping With Life’s Tests",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2023-1-13-Mrinalini-Mata_Coping-With-Lifes-Tests-2.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 851129,
    "Post Title": "Giving Thanks for Life's Blessings",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2022-11-23-Bro.-Kamalananda-Giving-Thanks-for-Lifes-Blessings.email_.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 811653,
    "Post Title": "Finding Your Inner Strength",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Ranjana-mai-Finding-Your-Inner-Strength.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 830331,
    "Post Title": "Giving Thanks for Life’s Blessings: Attitudes of a Yogi",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/swami_Jayananda_Thanksgiving_thumbnail_fb_or_youtube.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 802161,
    "Post Title": "The Science of Kriya Yoga",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Sw-Bhumananda-31-22.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 810494,
    "Post Title": "Attunement With the Christ Consciousness",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Prafullananda-Attunement-Christ-Consciousness-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 898893,
    "Post Title": "Creating Lasting Happiness",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-creating-lasting-happiness-by-brahmani-mai-featured-image-898893.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 866615,
    "Post Title": "Kriya Yoga: Quickening Our Human Evolution",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-kriya-yoga-quickening-our-human-evolution-by-draupadi-mai-featured-image-866615.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 855126,
    "Post Title": "Yama and Niyama: ‘How-to-Live’ Skills for Inner Strength and Freedom",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Chidananda-Yama-Niyama-How-to-Live-Skills.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 894716,
    "Post Title": "Change Your Life With the Practice of Silence",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/06/tl-change-your-life-with-the-practice-of-silence-by-swami-jayananda-giri-featured-image-894716.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 853835,
    "Post Title": "A World in Transition",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2022-10-21-Brother-Anandamoy-A-World-In-Transition.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 887061,
    "Post Title": "Awakening Divine Memory",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Ritananda-Awakening-Divine-Memory-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 844982,
    "Post Title": "Bringing the Power of Joy Into Our Lives",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Achalananda-Bringing-the-Power-of-Joy-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 846552,
    "Post Title": "How to Find Peace in Today’s World",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Sevananda-giri-How-to-Find-Peace-Email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 819046,
    "Post Title": "The Yoga Sadhana That Brings God's Love and Bliss",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Mrinalini-Mata-THE-YOGA-SADHA-Email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 856126,
    "Post Title": "Cultivating the Divine Qualities That Lead to Self-realization",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Priya-Mai-Cultivating-the-Divine-Qualities-Email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 825113,
    "Post Title": "The Importance of Developing Evenmindedness",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Muktananda_email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 844753,
    "Post Title": "A Blessing From Mahavatar Babaji",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/A-Blessing_Sri-Daya-Mata_eblast.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 849120,
    "Post Title": "Creating a Meaningful Personal Relationship With God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Anilananda-Creating-a-Meaningful-eblast.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 896073,
    "Post Title": "The Guru’s Unconditional Love for Each Disciple",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Uma-Mata-The-Gurus-Unconditional-Love.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 871989,
    "Post Title": "Living With a Positive and Joy-Filled Attitude",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Namita-Mai-Living-with-a-Positive-Attitude.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 860447,
    "Post Title": "How to Improve Your Attention and Concentration",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Govindananda-How-to-Improve-Your-Attention-eblast.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 838327,
    "Post Title": "Scientific Healing by God’s Infinite Cosmic Energy",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Bhumananda-Scientific-Healing-by-Gods-Infinite-Light-Facebook.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 881239,
    "Post Title": "Rediscovering Your Higher Self",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-rediscovering-your-higher-self-by-swami-govindananda-giri-featured-image-881239.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 851092,
    "Post Title": "Facing Life’s Challenges With Courage and Faith",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Nakulananda.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 882116,
    "Post Title": "God’s Nature in the Mother",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-gods-nature-in-the-mother-by-draupadi-mai-featured-image-882116.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 816076,
    "Post Title": "Taking Shelter in God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-taking-shelter-in-god-by-swami-satyananda-giri-featured-image-816076.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 873541,
    "Post Title": "The Liberating Power of Affirmation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-the-liberating-power-of-affirmation-by-swami-prafullananda-giri-featured-image-873541.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 841760,
    "Post Title": "Kriya Yoga: Science of Spiritual Living for the Modern Age",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-kriya-yoga-science-of-spiritual-living-for-the-modern-age-by-sri-sri-swami-chidananda-giri-featured-image-841760.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 837275,
    "Post Title": "Perseverance: Secret of Spiritual Success",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Nakulananda-Perseverance-Secret-of-Spiritual-Success.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 884396,
    "Post Title": "The Need for a True Guru in One’s Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/1593858593.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 881068,
    "Post Title": "The Cosmic Motion Picture",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-the-cosmic-motion-picture-by-swami-bhumananda-giri-featured-image-881068.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 888531,
    "Post Title": "The Secrets of Spiritual Progress",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-the-secrets-of-spiritual-progress-by-swami-jayananda-giri-featured-image-888531.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 838194,
    "Post Title": "Harnessing the Power of the Mind",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-harnessing-the-power-of-the-mind-by-swami-govindananda-giri-featured-image-838194.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 851020,
    "Post Title": "Cultivating Spiritual Enthusiasm",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Sattvananda-.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 884658,
    "Post Title": "Experiencing God Within",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Experiencing-God-Within.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 880017,
    "Post Title": "Cultivating Deeper Faith",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Achalananda.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 860661,
    "Post Title": "How You Can Talk With God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Karuna-Mai.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 812301,
    "Post Title": "Prayer: Trusting God in Every Circumstance",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Muki-Mata-for-Nov-20-Newsletter1.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 854474,
    "Post Title": "Guru and Disciple: An Eternal Covenant of Love",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Brother-Bhaktananda_Guru-and-Disciple.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 896930,
    "Post Title": "Kriya Yoga: Universal Science of God-Realization",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Anandamoy-Kriya-Yoga-Universal-Science-of-God-Realization-FB-video-thumbnail.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 889909,
    "Post Title": "Developing a Moment-to-Moment Relationship With God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Sw-Govindananda-1536x864.jpg",
    "Image Size": "1536*864",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 870446,
    "Post Title": "Yoga and the Steps to Unconditional Love",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-yoga-and-the-steps-to-unconditional-love-by-swami-bhumananda-giri-featured-image-870446.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 844534,
    "Post Title": "Opening Our Hearts and Minds to the Guru",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Sister_Bhakti-Opening-Our-Hearts-for-newsletter-1536x864.jpg",
    "Image Size": "1536*864",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 818573,
    "Post Title": "Keep On Keeping On, Taking God With You",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami_Achalananda-Keep_On_Keeping_On-for-Email.jpg",
    "Image Size": "960*540",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 832397,
    "Post Title": "Deepen Your Meditations: Let Go of the Drama",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Satyananda_Deepen-Your_Meditations-for-FB_thumbnail-1536x864.jpg",
    "Image Size": "1536*864",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 871963,
    "Post Title": "Forgiveness—Experiencing the Compassion of God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-forgivenessexperiencing-the-compassion-of-god-by-swami-saralananda-giri-featured-image-871963.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 864576,
    "Post Title": "Prayer — Embracing Our World with Compassion and Understanding",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Preeti-mai-Embracing_Our_World-for-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 812964,
    "Post Title": "Becoming Humble Bearers of Light",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2021_04_16-Swami_Ishtananda-Becoming_Humble_Bearers_of_Light-for_Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 870216,
    "Post Title": "Living in Constant Remembrance of God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Nakulananda-Living-in-Constant-Remembrance-of-God-for-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 871953,
    "Post Title": "A Spirit of Renewal and Joy",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Usha-mai-A_Spirit_of_Renewal_and_Joy-for_Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 839629,
    "Post Title": "Faith — Learning to Express the Unerring Intuition Within Us",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2021_5_21-Swami-Bhumananda-Faith_Learning-to-Express-the-Unerring_for-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 887620,
    "Post Title": "Life’s Challenges — Opportunities for Spiritual Progress",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-lifes-challenges-opportunities-for-spiritual-progress-by-swami-prafullananda-giri-featured-image-887620.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 851810,
    "Post Title": "Introspection — Key to Self-Discovery",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami_Govindananda-Introspection_for-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 849107,
    "Post Title": "Living Fearlessly — Overcoming the Causes of Stress and Worry",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami_Jayananda-Living_Fearlessly-for-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 836219,
    "Post Title": "Remembering Who You Really Are — The Soul",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Sister_Brahmani-Remembering_Who_You_Really_Are-for-Email-scaled.jpg",
    "Image Size": "2560*1440",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 868264,
    "Post Title": "How to Spiritualize Your Everyday Experiences",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Satyananda-Giri-email-thumbnail-image.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 839384,
    "Post Title": "Receiving God’s Response in the Silence of Meditation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Saralananda-Receiving-Gods-Response-for-video-thumbnail.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 883811,
    "Post Title": "Spiritualizing Our Relationships",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Preeti-Mai-blog-8-21.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 813720,
    "Post Title": "Dharma: The Path of Virtue That Leads to God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami_Vishwananda-giri.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 839167,
    "Post Title": "Change Your Thoughts — Change Your Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Bhumananda-Giri-1.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 816789,
    "Post Title": "There Is No Death",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Email-thumbnail_Sw-Prafullananda.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 873888,
    "Post Title": "Embraced in God’s Love — The Guru-Disciple Relationship",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/OIS_Oct15_2021_Bhakti_Mai.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 884191,
    "Post Title": "Faith — A Cornerstone of the Spiritual Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/OIS_Oct23_2021_Swami_Anilananda.png",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 819088,
    "Post Title": "Living a Balanced Life in a Complex World",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-living-a-balanced-life-in-a-complex-world-by-swami-jayananda-giri-featured-image-819088.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 882917,
    "Post Title": "Are We Letting Life’s Circumstances Control Us?",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Sevananda_Are-We-Letting-Lifes_Email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 856090,
    "Post Title": "Service — The Power of Love in Action",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Ritananda-Service-The-Power-of-Love-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 833863,
    "Post Title": "How to Develop Dynamic Will Power",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Sister-Ranjana-How-to-Develop-Dynamic-Will-Power.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 856412,
    "Post Title": "Let Every Day Be Christmas",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Sri-Daya-Mata-Let-Every-Day-Be-Christmas_for-email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 833356,
    "Post Title": "How to Live a God-Oriented Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Sattvananda-1.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 872769,
    "Post Title": "Expanding Our Love for Others and for God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami_Saralananda_Expanding-Our-Love-for-Others-and-for-God-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 821927,
    "Post Title": "Hearing the Voice of Conscience Within You",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2021-02-04-Brother-Satyananda-How-to-Hear-the-Voice-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 874157,
    "Post Title": "Cultivating Faith and Inner Strength in Today’s World",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Nandani-Cultivating-Faith-and-Inner-Strength-Email-1.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 883017,
    "Post Title": "Loyalty — Highest Law for Spiritual Success",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-loyalty-highest-law-for-spiritual-success-by-swami-ishtananda-giri-featured-image-883017.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 820920,
    "Post Title": "Overcoming Nervousness",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Nakulananda-Overcoming-Nervousness.email_.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 863683,
    "Post Title": "Living With Gratitude",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YSS_Online_Inspirational_Satsang_Brahmani_Mai_March_2022_YouTube_Banner.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 895219,
    "Post Title": "Become Fearless — Centre Your Life in God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Govindananda_Become-Fearless-Center-Your-Life-in-God-blog.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 855810,
    "Post Title": "Spiritualizing Family Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Ranjana-mai-Spiritualizing-Family-Life-YT.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 896566,
    "Post Title": "What Is Truth?",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-ritananda-what-is-truth-email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 815517,
    "Post Title": "Love — Human and Divine",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Satyananda-Love-Human-and-Divine-email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 896494,
    "Post Title": "The Caring Heart of Divine Mother",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Nandini-mai-Caring-Heart-of-Divine-Mother.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 829754,
    "Post Title": "Controlling the Power of Habits",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Prafullananda-Controlling-the-Power-yt-thumbnail.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 888124,
    "Post Title": "Ways to Conquer Fear",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Saralananda-Ways-to-Conquer-Fear-video.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 859020,
    "Post Title": "Attuning Our Lives With God’s Plan",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Chidananda-Giri-Attuning-Our-Lives-with-Gods-Plan-scaled.jpg",
    "Image Size": "2560*1440",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 881703,
    "Post Title": "Discovering the Lasting Happiness of Your Soul",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Nakulananda-Choosing-to-Be-Happy-email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 829885,
    "Post Title": "Creating Your Spiritual Environment",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Anandamoy-Creating-Your-Spiritual-Environment-Email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 899458,
    "Post Title": "Uniting Our Will with God’s Infinite Power",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Sevananda-Uniting-Our-Will-With-Gods-Infinite-Power-YT.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 866065,
    "Post Title": "Achieving Your Material and Spiritual Goals",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Chidananda-giri-thumbnail.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 815929,
    "Post Title": "Paramahansa Yogananda: A World Teacher",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YSS_Online_Inspirational_Satsanga_Swami_Anandamoy_Giri_Jan8_2022_YouTube_Banner.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 867302,
    "Post Title": "Spiritual Generosity — The Art of Selflessly Helping Others",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-spiritual-generosity-the-art-of-selflessly-helping-others-by-swami-nakulananda-giri-featured-image-867302.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 861954,
    "Post Title": "Living in the Sacred Presence of Divine Mother",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami_Chidananda-Living_In_The-_Sacred_Presence-for_YouTube.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 844084,
    "Post Title": "The Cosmic Mystery of Karma and Reincarnation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Sevananda-the-Cosmic-Mystery-of-Karma-for-blog.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 848374,
    "Post Title": "Your Thoughts Can Change Your Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami_Anandamoy-Giri-Your_Thoughts_Can_Change_Your_Life.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 815142,
    "Post Title": "Coping With Life’s Challenges",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-coping-with-lifes-challenges-by-swami-smaranananda-giri-featured-image-815142.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 811107,
    "Post Title": "Spiritual Happiness: Tapping Into the Soul’s Storehouse of Love, Peace, and Joy",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-spiritual-happiness-tapping-into-the-souls-storehouse-of-love-peace-and-joy-by-preeti-mai-featured-image-811107.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 831557,
    "Post Title": "A Promise of Light",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-a-promise-of-light-by-sri-sri-daya-mata-featured-image-831557.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 856979,
    "Post Title": "The Guru—Guide to Eternal Freedom",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-the-guru-guide-to-eternal-freedom-by-swami-anilananda-giri-featured-image-856979.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 808637,
    "Post Title": "True Devotion: Living in God’s Presence Moment to Moment",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-true-devotion-living-in-gods-presence-moment-to-moment-by-swami-vishwananda-giri-featured-image-808637.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 815258,
    "Post Title": "Finding Spiritual Balance in Your Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-finding-spiritual-balance-in-your-life-by-priya-mai-featured-image-815258.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 831176,
    "Post Title": "Principles of Effective Prayer",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-principles-of-effective-prayer-by-swami-smaranananda-giri-featured-image-831176.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 872781,
    "Post Title": "Strengthening Character by Developing Spiritual Courage and Endurance",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Brother-Chidananda-Talk-Strengthening-Character.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 809224,
    "Post Title": "Fulfilling the Highest Purpose of Life",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami_Vishwananda_Fulfilling-the-Highest_Purpose-for-email.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 809789,
    "Post Title": "The Final Days of Paramahansa Yogananda — A Talk by Sri Sri Daya Mata (Sanghamata and Third President of YSS/SRF)",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Sri-Daya-Mata-My-Spirit-Shall-Live-On-Email.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 884785,
    "Post Title": "Celebrating Christmas in the Temple of the Soul",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Nakulananda-Celebrating-Christmas-in-the-Temple-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 855035,
    "Post Title": "The Deeper Teachings of Jesus Christ",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-the-deeper-teachings-of-jesus-christ-by-swami-saralananda-giri-featured-image-855035.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 827899,
    "Post Title": "Living Without Fear",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/living-without-fear-by-swami-anantanandaji.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 814359,
    "Post Title": "Opening Your Heart to God’s Presence",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Daya-Mata-Opening-Your-Heart-Email-1.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 880444,
    "Post Title": "Getting Acquainted With God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Sattvananda_Getting-Acquainted-with-God.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 884227,
    "Post Title": "Winning the Battle of Life (Kurukshetra Within Me) – Part I",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YSS-Discourses-on-The-Bhagavad-Gita-Part1-Sw.Smaranananda1.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 823437,
    "Post Title": "Winning the Battle of Life (Kurukshetra Within Me) – Part II",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YSS-Discourses-on-The-Bhagavad-Gita-Sw.Smaranananda-Part21.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 870792,
    "Post Title": "Winning the Battle of Life (Kurukshetra Within Me) – Part III",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YSS-Discourses-on-the-Bhagavad-Gita-Part31.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 894908,
    "Post Title": "Winning the Battle of Life (Kurukshetra Within Me) – Part IV",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YT-Gita-Banner-Welcome-IV-720p-resize.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 815469,
    "Post Title": "Winning the Battle of Life (Kurukshetra Within Me) – Part V",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YSS-Discourses-On-The-Bhagavad-Gita-Part5-Swami-Smaranananda_Giri.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 872748,
    "Post Title": "The Conch Shells in Kurukshetra Battle — Inner Vibratory Battle in Meditation: Part I",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YSS-ODK-Discourse-on-the-Bhagavad-Gita-by-Swami-Smaranananda-Giri-May20-2023-YouTube-Banner-1.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 848355,
    "Post Title": "The Conch Shells in Kurukshetra Battle — Inner Vibratory Battle in Meditation: Part II",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YSS-ODK-Discourse-on-the-Bhagavad-Gita-by-Swami-Smaranananda-Giri-June03-2023-YouTube-Banner.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 829542,
    "Post Title": "Ways to Deepen Your Meditations",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/06/tl-ways-to-deepen-your-meditations-by-swami-bhaktananda-giri-featured-image-829542.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 832254,
    "Post Title": "Learn to Meditate Part One - Correct Posture",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-learn-to-meditate-part-one-correct-posture-by-swami-achalananda-giri-featured-image-832254.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 831561,
    "Post Title": "Learn to Meditate Part Two - The Attention",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-learn-to-meditate-part-two-the-attention-by-swami-achalananda-giri-featured-image-831561.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 824495,
    "Post Title": "Learn To Meditate Part Three - Beginning a Meditation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-learn-to-meditate-part-three-beginning-a-meditation-by-swami-achalananda-giri-featured-image-824495.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 895724,
    "Post Title": "Learn to Meditate Part Four - Prayer and Meditation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-learn-to-meditate-part-four-prayer-and-meditation-by-swami-achalananda-giri-featured-image-895724.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 836444,
    "Post Title": "Learn to Meditate Part Five - The Benefits of Meditation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-learn-to-meditate-part-five-the-benefits-of-meditation-by-swami-achalananda-giri-featured-image-836444.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987655,
    "Post Title": "Finding Balance and Calmness through Yoga-Meditation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/05/YSS-International-Day-of-Yoga-2024-Online-Public-Talk-English.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 987660,
    "Post Title": "Discover Inner Tranquillity Through Yoga-Meditation",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/YSS-International-Day-of-Yoga-2023-Online-Public-Talk-English-1.jpg",
    "Image Size": "1920*1080",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 890029,
    "Post Title": "Guided Meditation on Your True Self",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Ishtananda-Giriweb-big-thumbnail.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 841896,
    "Post Title": "Guided Meditation on The Flame of Divine Love",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Sister-Usha-Video-1.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 889546,
    "Post Title": "Guided Meditation on Paramahansa Yogananda’s “A Prayer for Peace on Earth”",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Brother-Bhumananda_127aeca95ae187510d37a120b7b7b801.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 838116,
    "Post Title": "Guided Meditation on Making a “Soul Call” to the Divine",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Swami-Satyananda-giri.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 856343,
    "Post Title": "Guided Meditation on Expanding Love from Paramahansa Yogananda",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-guided-meditation-on-expanding-love-from-paramahansa-yogananda-by-swami-govindananda-giri-featured-image-856343.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 884421,
    "Post Title": "Guided Meditation on Creating an Inner Environment for Success",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Guided-Meditation-Success-1536x1022-1-768x432.jpg",
    "Image Size": "768*432",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 810130,
    "Post Title": "Guided Meditation on Anchoring Yourself in Calmness",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Karuna-Mai-2.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 851706,
    "Post Title": "Guided Meditation on God as Light",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Guided-Meditation-God-as-Light-1-768x432.jpg",
    "Image Size": "768*432",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 881295,
    "Post Title": "Guided Meditation on Expansion of Consciousness",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Guided-Meditation-Expansion-e1627800654103-768x432.jpg",
    "Image Size": "768*432",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 834013,
    "Post Title": "Guided Meditation on Expanding Love",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-guided-meditation-on-expanding-love-featured-image-834013.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 820267,
    "Post Title": "Guided Meditation on Living Fearlessly",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Guided-Meditation-Living-Fearlessly_-e1627800805970-1536x1023-1.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 866205,
    "Post Title": "Guided Meditation on Peace",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/Guided-Meditation-Peace-1.jpg",
    "Image Size": "1200*675",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 857601,
    "Post Title": "Guided Meditation on Inner Peace from Paramahansa Yogananda",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2021-09-03_Swami-Sevananda-for-Email.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 807331,
    "Post Title": "Paramahansa Yogananda on Loving God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-paramahansa-yogananda-on-loving-god-featured-image-807331.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 835162,
    "Post Title": "Paramahansa Yogananda on How to Destroy Suffering by Its Roots",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-paramahansa-yogananda-on-how-to-destroy-suffering-by-its-roots-featured-image-835162.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 892844,
    "Post Title": "Paramahansa Yogananda on Karma",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-paramahansa-yogananda-on-karma-featured-image-892844.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 839325,
    "Post Title": "Paramahansa Yogananda on Finding Happiness Within",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-paramahansa-yogananda-on-finding-happiness-within-featured-image-839325.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 872696,
    "Post Title": "Paramahansa Yogananda on Thinking of Nothing But God for One Day",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-paramahansa-yogananda-on-thinking-of-nothing-but-god-for-one-day-featured-image-872696.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 819766,
    "Post Title": "Paramahansa Yogananda on Kriya Yoga — The Key to Heaven",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-paramahansa-yogananda-on-kriya-yoga-the-key-to-heaven-featured-image-819766.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 889963,
    "Post Title": "Paramahansa Yogananda on Kriya Yoga — The Greatest Proof of God",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-paramahansa-yogananda-on-kriya-yoga-the-greatest-proof-of-god-featured-image-889963.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 879731,
    "Post Title": "Paramahansa Yogananda on the Dream-Nature of the World",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/06/tl-paramahansa-yogananda-on-the-dream-nature-of-the-world-featured-image-879731.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 889667,
    "Post Title": "In the Temple of Silence",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-in-the-temple-of-silence-by-sri-sri-paramahansa-yogananda-featured-image-889667.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 889902,
    "Post Title": "In the Glory of the Spirit",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-in-the-glory-of-the-spirit-by-sri-sri-paramahansa-yogananda-featured-image-889902.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 834181,
    "Post Title": "Awake in the Cosmic Dream",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-awake-in-the-cosmic-dream-by-sri-sri-paramahansa-yogananda-featured-image-834181.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 863650,
    "Post Title": "Enveloped in a Wave of Divine Love",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-enveloped-in-a-wave-of-divine-love-by-swami-mokshananda-giri-featured-image-863650.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 866632,
    "Post Title": "How Yogananda Awakened Divine Consciousness in Receptive Disciples",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-how-yogananda-awakened-divine-consciousness-in-receptive-disciples-by-swami-mokshananda-giri-featured-image-866632.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 843366,
    "Post Title": "The Devotee Who Perceives God in All Things",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-the-devotee-who-perceives-god-in-all-things-by-swami-anandamoy-giri-featured-image-843366.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 822069,
    "Post Title": "Is Our Guru an Avatar",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-is-our-guru-an-avatar-by-swami-anandamoy-giri-featured-image-822069.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  },
  {
    "UID": 820903,
    "Post Title": "Attuning Our Lives to the Guru’s Blessings",
    "Featured Image (URL)": "https://yssofindia.org/wp-content/uploads/2024/07/tl-attuning-our-lives-to-the-gurus-blessings-by-sri-sri-daya-mata-featured-image-820903.jpg",
    "Image Size": "1280*720",
    "HTTP Status Code": "",
    "Dimensions": ""
  }
];

execFunction();

function execFunction() { 
  testDataForAudio.forEach(async (testCase, index) => {
    console.warn();
    `#${index + 1} Image with Title: ${testCase["Post Title"]}`;
  
    const imgUrl = `${testCase["Featured Image (URL)"]}`;
    const options = url.parse(imgUrl);
  
    try {
    await https.get(options, async function (response) {
      const chunks = [];
      response
        .on("data", async function (chunk) {
          chunks.push(chunk);
        })
        .on("end", async function () {
          const buffer = Buffer.concat(chunks);
          // console.log(`#${index + 1}`);
          console.log(testCase["UID"]);
          console.log(testCase["Post Title"]);
          console.log(testCase["Featured Image (URL)"]);
          console.log(testCase["Image Size"]);
          console.log(sizeOf(buffer));
        });
    });
  } catch (err) {
    console.error(err)
  }
  });
}