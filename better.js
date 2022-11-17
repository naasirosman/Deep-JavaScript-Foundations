
let genderFilter = "anyGender";
let ageFilter = "anyAge";
let planFilter = "anyPlan";


let likedUsers = [];
let passedUsers = [];
const currentUser = {};

document.querySelector(".male").addEventListener("click", () => {
    genderFilter = "male";
    document.querySelector(".male").style.backgroundColor = "black";
    document.querySelector(".male").style.color = "beige";
    document.querySelector(".female").style.backgroundColor = "beige";
    document.querySelector(".female").style.color = "black";
    document.querySelector(".anyGender").style.backgroundColor = "beige";
    document.querySelector(".anyGender").style.color = "black";

});
document.querySelector(".female").addEventListener("click", () => {
    genderFilter = "female";
    document.querySelector(".male").style.backgroundColor = "beige";
    document.querySelector(".male").style.color = "black";
    document.querySelector(".female").style.backgroundColor = "black";
    document.querySelector(".female").style.color = "beige";
    document.querySelector(".anyGender").style.backgroundColor = "beige";
    document.querySelector(".anyGender").style.color = "black";

});
document.querySelector(".any").addEventListener("click", () => {
    genderFilter = "anyGender";
    document.querySelector(".male").style.backgroundColor = "beige";
    document.querySelector(".male").style.color = "black";
    document.querySelector(".female").style.backgroundColor = "beige";
    document.querySelector(".female").style.color = "black";
    document.querySelector(".anyGender").style.backgroundColor = "black";
    document.querySelector(".anyGender").style.color = "beige";

});

document.querySelector(".twenty").addEventListener("click", () => {
    ageFilter = "twenty";
    document.querySelector(".twenty").style.backgroundColor = "black";
    document.querySelector(".twenty").style.color = "beige";
    document.querySelector(".thirty").style.backgroundColor = "beige";
    document.querySelector(".thirty").style.color = "black";
    document.querySelector(".forty").style.backgroundColor = "beige";
    document.querySelector(".forty").style.color = "black";
    document.querySelector(".anyAge").style.backgroundColor = "beige";
    document.querySelector(".anyAge").style.color = "black";

});
document.querySelector(".thirty").addEventListener("click", () => {
    ageFilter = "thirty";
    document.querySelector(".thirty").style.backgroundColor = "black";
    document.querySelector(".thirty").style.color = "beige";
    document.querySelector(".twenty").style.backgroundColor = "beige";
    document.querySelector(".twenty").style.color = "black";
    document.querySelector(".forty").style.backgroundColor = "beige";
    document.querySelector(".forty").style.color = "black";
    document.querySelector(".anyAge").style.backgroundColor = "beige";
    document.querySelector(".anyAge").style.color = "black";

});
document.querySelector(".forty").addEventListener("click", () => {
    ageFilter = "forty";
    document.querySelector(".forty").style.backgroundColor = "black";
    document.querySelector(".forty").style.color = "beige";
    document.querySelector(".twenty").style.backgroundColor = "beige";
    document.querySelector(".twenty").style.color = "black";
    document.querySelector(".thirty").style.backgroundColor = "beige";
    document.querySelector(".thirty").style.color = "black";
    document.querySelector(".anyAge").style.backgroundColor = "beige";
    document.querySelector(".anyAge").style.color = "black";

});
document.querySelector(".anyAge").addEventListener("click", () => {
    ageFilter = "anyAge";
    document.querySelector(".anyAge").style.backgroundColor = "black";
    document.querySelector(".anyAge").style.color = "beige";
    document.querySelector(".twenty").style.backgroundColor = "beige";
    document.querySelector(".twenty").style.color = "black";
    document.querySelector(".thirty").style.backgroundColor = "beige";
    document.querySelector(".thirty").style.color = "black";
    document.querySelector(".forty").style.backgroundColor = "beige";
    document.querySelector(".forty").style.color = "black";

});

document.querySelector(".basic").addEventListener("click", () => {
    planFilter = "basic";
    document.querySelector(".basic").style.backgroundColor = "black";
    document.querySelector(".basic").style.color = "beige";
    document.querySelector(".gold").style.backgroundColor = "beige";
    document.querySelector(".gold").style.color = "black";
    document.querySelector(".platinum").style.backgroundColor = "beige";
    document.querySelector(".platinum").style.color = "black";
    document.querySelector(".anyPlan").style.backgroundColor = "beige";
    document.querySelector(".anyPlan").style.color = "black";

});
document.querySelector(".gold").addEventListener("click", () => {
    planFilter = "gold";
    document.querySelector(".gold").style.backgroundColor = "black";
    document.querySelector(".gold").style.color = "beige";
    document.querySelector(".basic").style.backgroundColor = "beige";
    document.querySelector(".basic").style.color = "black";
    document.querySelector(".platinum").style.backgroundColor = "beige";
    document.querySelector(".platinum").style.color = "black";
    document.querySelector(".anyPlan").style.backgroundColor = "beige";
    document.querySelector(".anyPlan").style.color = "black";

});
document.querySelector(".platinum").addEventListener("click", () => {
    planFilter = "platinum";
    document.querySelector(".platinum").style.backgroundColor = "black";
    document.querySelector(".platinum").style.color = "beige";
    document.querySelector(".basic").style.backgroundColor = "beige";
    document.querySelector(".basic").style.color = "black";
    document.querySelector(".gold").style.backgroundColor = "beige";
    document.querySelector(".gold").style.color = "black";
    document.querySelector(".anyPlan").style.backgroundColor = "beige";
    document.querySelector(".anyPlan").style.color = "black";

});
document.querySelector(".anyPlan").addEventListener("click", () => {
    planFilter = "anyPlan";
    document.querySelector(".anyPlan").style.backgroundColor = "black";
    document.querySelector(".anyPlan").style.color = "beige";
    document.querySelector(".basic").style.backgroundColor = "beige";
    document.querySelector(".basic").style.color = "black";
    document.querySelector(".gold").style.backgroundColor = "beige";
    document.querySelector(".gold").style.color = "black";
    document.querySelector(".platinum").style.backgroundColor = "beige";
    document.querySelector(".platinum").style.color = "black";

});


let displayingOptions = false;
const displayOptions = () => {
    if (displayingOptions === false) {
        document.querySelector(".options").style.display = "flex";
        document.querySelector(".filterButton").style.color = "beige";
        document.querySelector(".filterButton").style.backgroundColor = "black";
        displayingOptions = true
    }
    else {
        document.querySelector(".options").style.display = "none";
        document.querySelector(".filterButton").style.color = "black";
        document.querySelector(".filterButton").style.backgroundColor = "beige";
        displayingOptions = false;
    };
};


const careers = [
    "Manager",
    "Teacher",
    "Director",
    "Accountant",
    "Consultant",
    "Administrator",
    "Solicitor",
    "Accountant",
    "Analyst",
    "Engineer",
    "Doctor",
    "Secretary",
    "Developer",
    "Graphic",
    "Lecturer",
    "Architect",
    "Hr",
    'Receptionist',
    "Buyer",
    "Designer",
    'Associate',
    'Marketing',
    'Product',
    'Programmer',
    'Sales',
    'Designer',
    'Electrician',
    'Pharmacist',
    'Supervisor',
    'Nurse',
    'Recruitment',
    'Production',
    'Lawyer',
    'Dentist',
    'Practitioner',
    'Executive',
    'Driver',
    'Pilot',
    'Plumber',
    'Editor',
    'Barrister',
    'Scientist',
    'Estimator',
    'Trader',
    'Researcher',
    'Trainer',
    'Auditor',
    'Graduate'];


let plans = [
    "Basic",
    "Gold",
    "Platinum"
];

console.log(planFilter)


const traits = [
    'aback',
    'abaft',
    'abandoned',
    'abashed',
    'aberrant',
    'abhorrent',
    'abiding',
    'abject',
    'ablaze',
    'able',
    'abnormal',
    'aboriginal',
    'abortive',
    'abounding',
    'abrasive',
    'abrupt',
    'absent',
    'absorbed',
    'absorbing',
    'abstracted',
    'absurd',
    'abundant',
    'abusive',
    'acceptable',
    'accessible',
    'accidental',
    'accurate',
    'acid',
    'acidic',
    'acoustic',
    'acrid',
    'adamant',
    'adaptable',
    'addicted',
    'adhesive',
    'adjoining',
    'adorable',
    'adventurous',
    'afraid',
    'aggressive',
    'agonizing',
    'agreeable',
    'ahead',
    'ajar',
    'alert',
    'alike',
    'alive',
    'alleged',
    'alluring',
    'aloof',
    'amazing',
    'ambiguous',
    'ambitious',
    'amuck',
    'amused',
    'amusing',
    'ancient',
    'angry',
    'animated',
    'annoyed',
    'annoying',
    'anxious',
    'apathetic',
    'aquatic',
    'aromatic',
    'arrogant',
    'ashamed',
    'aspiring',
    'assorted',
    'astonishing',
    'attractive',
    'auspicious',
    'automatic',
    'available',
    'average',
    'aware',
    'awesome',
    'axiomatic',
    'bad',
    'barbarous',
    'bashful',
    'bawdy',
    'beautiful',
    'befitting',
    'belligerent',
    'beneficial',
    'bent',
    'berserk',
    'bewildered',
    'big',
    'billowy',
    'bite-sized',
    'bitter',
    'bizarre',
    'black',
    'black-and-white',
    'bloody',
    'blue',
    'blue-eyed',
    'blushing',
    'boiling',
    'boorish',
    'bored',
    'boring',
    'bouncy',
    'boundless',
    'brainy',
    'brash',
    'brave',
    'brawny',
    'breakable',
    'breezy',
    'brief',
    'bright',
    'broad',
    'broken',
    'brown',
    'bumpy',
    'burly',
    'bustling',
    'busy',
    'cagey',
    'calculating',
    'callous',
    'calm',
    'capable',
    'capricious',
    'careful',
    'careless',
    'caring',
    'cautious',
    'ceaseless',
    'certain',
    'changeable',
    'charming',
    'cheap',
    'cheerful',
    'chemical',
    'chief',
    'childlike',
    'chilly',
    'chivalrous',
    'chubby',
    'chunky',
    'clammy',
    'classy',
    'clean',
    'clear',
    'clever',
    'cloistered',
    'cloudy',
    'closed',
    'clumsy',
    'cluttered',
    'coherent',
    'cold',
    'colorful',
    'colossal',
    'combative',
    'comfortable',
    'common',
    'complete',
    'complex',
    'concerned',
    'condemned',
    'confused',
    'conscious',
    'cooing',
    'cool',
    'cooperative',
    'coordinated',
    'courageous',
    'cowardly',
    'crabby',
    'craven',
    'crazy',
    'creepy',
    'crooked',
    'crowded',
    'cruel',
    'cuddly',
    'cultured',
    'cumbersome',
    'curious',
    'curly',
    'curved',
    'curvy',
    'cut',
    'cute',
    'cynical',
    'daffy',
    'daily',
    'damaged',
    'damaging',
    'damp',
    'dangerous',
    'dapper',
    'dark',
    'dashing',
    'dazzling',
    'dead',
    'deadpan',
    'deafening',
    'dear',
    'debonair',
    'decisive',
    'decorous',
    'deep',
    'deeply',
    'defeated',
    'defective',
    'defiant',
    'delicate',
    'delicious',
    'delightful',
    'demonic',
    'delirious',
    'dependent',
    'depressed',
    'deranged',
    'descriptive',
    'deserted',
    'detailed',
    'determined',
    'devilish',
    'didactic',
    'different',
    'difficult',
    'diligent',
    'direful',
    'dirty',
    'disagreeable',
    'disastrous',
    'discreet',
    'disgusted',
    'disgusting',
    'disillusioned',
    'dispensable',
    'distinct',
    'disturbed',
    'divergent',
    'dizzy',
    'domineering',
    'doubtful',
    'drab',
    'draconian',
    'dramatic',
    'dreary',
    'drunk',
    'dry',
    'dull',
    'dusty',
    'dynamic',
    'dysfunctional',
    'eager',
    'early',
    'earsplitting',
    'earthy',
    'easy',
    'eatable',
    'economic',
    'educated',
    'efficacious',
    'efficient',
    'elastic',
    'elated',
    'elderly',
    'electric',
    'elegant',
    'elfin',
    'elite',
    'embarrassed',
    'eminent',
    'empty',
    'enchanted',
    'enchanting',
    'encouraging',
    'endurable',
    'energetic',
    'enormous',
    'entertaining',
    'enthusiastic',
    'envious',
    'equable',
    'equal',
    'erect',
    'erratic',
    'ethereal',
    'evanescent',
    'evasive',
    'even',
    'excellent',
    'excited',
    'exciting',
    'exclusive',
    'exotic',
    'expensive',
    'extra-large',
    'extra-small',
    'exuberant',
    'exultant',
    'fabulous',
    'faded',
    'faint',
    'fair',
    'faithful',
    'fallacious',
    'false',
    'familiar',
    'famous',
    'fanatical',
    'fancy',
    'fantastic',
    'far',
    'far-flung',
    'fascinated',
    'fast',
    'fat',
    'faulty',
    'fearful',
    'fearless',
    'feeble',
    'feigned',
    'female',
    'fertile',
    'festive',
    'few',
    'fierce',
    'filthy',
    'fine',
    'finicky',
    'first',
    'fixed',
    'flagrant',
    'flaky',
    'flashy',
    'flat',
    'flawless',
    'flimsy',
    'flippant',
    'flowery',
    'fluffy',
    'fluttering',
    'foamy',
    'foolish',
    'foregoing',
    'forgetful',
    'fortunate',
    'frail',
    'fragile',
    'frantic',
    'free',
    'freezing',
    'frequent',
    'fresh',
    'fretful',
    'friendly',
    'frightened',
    'frightening',
    'full',
    'fumbling',
    'functional',
    'funny',
    'furry',
    'furtive',
    'future',
    'futuristic',
    'fuzzy',
    'gabby',
    'gainful',
    'gamy',
    'gaping',
    'garrulous',
    'gaudy',
    'general',
    'gentle',
    'giant',
    'giddy',
    'gifted',
    'gigantic',
    'glamorous',
    'gleaming',
    'glib',
    'glistening',
    'glorious',
    'glossy',
    'godly',
    'good',
    'goofy',
    'gorgeous',
    'graceful',
    'grandiose',
    'grateful',
    'gratis',
    'gray',
    'greasy',
    'great',
    'greedy',
    'green',
    'grey',
    'grieving',
    'groovy',
    'grotesque',
    'grouchy',
    'grubby',
    'gruesome',
    'grumpy',
    'guarded',
    'guiltless',
    'gullible',
    'gusty',
    'guttural',
    'habitual',
    'half',
    'hallowed',
    'halting',
    'handsome',
    'handy',
    'hanging',
    'hapless',
    'happy',
    'hard',
    'hard-to-find',
    'harmonious',
    'harsh',
    'hateful',
    'heady',
    'healthy',
    'heartbreaking',
    'heavenly',
    'heavy',
    'hellish',
    'helpful',
    'helpless',
    'hesitant',
    'hideous',
    'high',
    'highfalutin',
    'high-pitched',
    'hilarious',
    'hissing',
    'historical',
    'holistic',
    'hollow',
    'homeless',
    'homely',
    'honorable',
    'horrible',
    'hospitable',
    'hot',
    'huge',
    'hulking',
    'humdrum',
    'humorous',
    'hungry',
    'hurried',
    'hurt',
    'hushed',
    'husky',
    'hypnotic',
    'hysterical',
    'icky',
    'icy',
    'idiotic',
    'ignorant',
    'ill',
    'illegal',
    'ill-fated',
    'ill-informed',
    'illustrious',
    'imaginary',
    'immense',
    'imminent',
    'impartial',
    'imperfect',
    'impolite',
    'important',
    'imported',
    'impossible',
    'incandescent',
    'incompetent',
    'inconclusive',
    'industrious',
    'incredible',
    'inexpensive',
    'infamous',
    'innate',
    'innocent',
    'inquisitive',
    'insidious',
    'instinctive',
    'intelligent',
    'interesting',
    'internal',
    'invincible',
    'irate',
    'irritating',
    'itchy',
    'jaded',
    'jagged',
    'jazzy',
    'jealous',
    'jittery',
    'jobless',
    'jolly',
    'joyous',
    'judicious',
    'juicy',
    'jumbled',
    'jumpy',
    'juvenile',
    'keen',
    'kind',
    'kindhearted',
    'kindly',
    'knotty',
    'knowing',
    'knowledgeable',
    'known',
    'labored',
    'lackadaisical',
    'lacking',
    'lame',
    'lamentable',
    'languid',
    'large',
    'last',
    'late',
    'laughable',
    'lavish',
    'lazy',
    'lean',
    'learned',
    'left',
    'legal',
    'lethal',
    'level',
    'lewd',
    'light',
    'like',
    'likeable',
    'limping',
    'literate',
    'little',
    'lively',
    'living',
    'lonely',
    'long',
    'longing',
    'long-term',
    'loose',
    'lopsided',
    'loud',
    'loutish',
    'lovely',
    'loving',
    'low',
    'lowly',
    'lucky',
    'ludicrous',
    'lumpy',
    'lush',
    'luxuriant',
    'lying',
    'lyrical',
    'macabre',
    'macho',
    'maddening',
    'madly',
    'magenta',
    'magical',
    'magnificent',
    'majestic',
    'makeshift',
    'male',
    'malicious',
    'mammoth',
    'maniacal',
    'many',
    'marked',
    'massive',
    'married',
    'marvelous',
    'material',
    'materialistic',
    'mature',
    'mean',
    'measly',
    'meaty',
    'medical',
    'meek',
    'mellow',
    'melodic',
    'melted',
    'merciful',
    'mere',
    'messy',
    'mighty',
    'military',
    'milky',
    'mindless',
    'miniature',
    'minor',
    'miscreant',
    'misty',
    'mixed',
    'moaning',
    'modern',
    'moldy',
    'momentous',
    'motionless',
    'mountainous',
    'muddled',
    'mundane',
    'murky',
    'mushy',
    'mute',
    'mysterious',
    'naive',
    'nappy',
    'narrow',
    'nasty',
    'natural',
    'naughty',
    'nauseating',
    'near',
    'neat',
    'nebulous',
    'necessary',
    'needless',
    'needy',
    'neighborly',
    'nervous',
    'new',
    'next',
    'nice',
    'nifty',
    'nimble',
    'nippy',
    'noiseless',
    'noisy',
    'nonchalant',
    'nondescript',
    'nonstop',
    'normal',
    'nostalgic',
    'nosy',
    'noxious',
    'numberless',
    'numerous',
    'nutritious',
    'nutty',
    'oafish',
    'obedient',
    'obeisant',
    'obese',
    'obnoxious',
    'obscene',
    'obsequious',
    'observant',
    'obsolete',
    'obtainable',
    'oceanic',
    'odd',
    'offbeat',
    'old',
    'old-fashioned',
    'omniscient',
    'onerous',
    'open',
    'opposite',
    'optimal',
    'orange',
    'ordinary',
    'organic',
    'ossified',
    'outgoing',
    'outrageous',
    'outstanding',
    'oval',
    'overconfident',
    'overjoyed',
    'overrated',
    'overt',
    'overwrought',
    'painful',
    'painstaking',
    'pale',
    'paltry',
    'panicky',
    'panoramic',
    'parallel',
    'parched',
    'parsimonious',
    'past',
    'pastoral',
    'pathetic',
    'peaceful',
    'penitent',
    'perfect',
    'periodic',
    'permissible',
    'perpetual',
    'petite',
    'phobic',
    'physical',
    'picayune',
    'pink',
    'piquant',
    'placid',
    'plain',
    'plant',
    'plastic',
    'plausible',
    'pleasant',
    'plucky',
    'pointless',
    'poised',
    'polite',
    'political',
    'poor',
    'possessive',
    'possible',
    'powerful',
    'precious',
    'premium',
    'present',
    'pretty',
    'previous',
    'pricey',
    'prickly',
    'private',
    'probable',
    'productive',
    'profuse',
    'protective',
    'proud',
    'psychedelic',
    'psychotic',
    'public',
    'puffy',
    'pumped',
    'puny',
    'purple',
    'purring',
    'pushy',
    'puzzled',
    'puzzling',
    'quaint',
    'quarrelsome',
    'questionable',
    'quick',
    'quiet',
    'quirky',
    'quixotic',
    'quizzical',
    'rabid',
    'racial',
    'ragged',
    'rainy',
    'rambunctious',
    'rampant',
    'rapid',
    'rare',
    'raspy',
    'ratty',
    'ready',
    'real',
    'rebel',
    'receptive',
    'recondite',
    'red',
    'redundant',
    'reflective',
    'regular',
    'relieved',
    'remarkable',
    'reminiscent',
    'repulsive',
    'resolute',
    'resonant',
    'responsible',
    'rhetorical',
    'rich',
    'right',
    'righteous',
    'rightful',
    'rigid',
    'ripe',
    'ritzy',
    'roasted',
    'robust',
    'romantic',
    'roomy',
    'rotten',
    'rough',
    'round',
    'royal',
    'ruddy',
    'rude',
    'rural',
    'rustic',
    'ruthless',
    'sable',
    'sad',
    'safe',
    'salty',
    'same',
    'sassy',
    'satisfying',
    'savory',
    'scandalous',
    'scarce',
    'scared',
    'scary',
    'scattered',
    'scientific',
    'scintillating',
    'scrawny',
    'screeching',
    'second',
    'second-hand',
    'secret',
    'secretive',
    'sedate',
    'seemly',
    'selective',
    'selfish',
    'separate',
    'serious',
    'shaggy',
    'shaky',
    'shallow',
    'sharp',
    'shiny',
    'shivering',
    'shocking',
    'short',
    'shrill',
    'shut',
    'shy',
    'sick',
    'silent',
    'silky',
    'silly',
    'simple',
    'simplistic',
    'sincere',
    'skillful',
    'skinny',
    'sleepy',
    'slim',
    'slimy',
    'slippery',
    'sloppy',
    'slow',
    'small',
    'smart',
    'smelly',
    'smiling',
    'smoggy',
    'smooth',
    'sneaky',
    'snobbish',
    'snotty',
    'soft',
    'soggy',
    'solid',
    'somber',
    'sophisticated',
    'sordid',
    'sore',
    'sour',
    'sparkling',
    'special',
    'spectacular',
    'spicy',
    'spiffy',
    'spiky',
    'spiritual',
    'spiteful',
    'splendid',
    'spooky',
    'spotless',
    'spotted',
    'spotty',
    'spurious',
    'squalid',
    'square',
    'squealing',
    'squeamish',
    'staking',
    'stale',
    'standing',
    'statuesque',
    'steadfast',
    'steady',
    'steep',
    'stereotyped',
    'sticky',
    'stiff',
    'stimulating',
    'stingy',
    'stormy',
    'straight',
    'strange',
    'striped',
    'strong',
    'stupendous',
    'sturdy',
    'subdued',
    'subsequent',
    'substantial',
    'successful',
    'succinct',
    'sudden',
    'sulky',
    'super',
    'superb',
    'superficial',
    'supreme',
    'swanky',
    'sweet',
    'sweltering',
    'swift',
    'symptomatic',
    'synonymous',
    'taboo',
    'tacit',
    'tacky',
    'talented',
    'tall',
    'tame',
    'tan',
    'tangible',
    'tangy',
    'tart',
    'tasteful',
    'tasteless',
    'tasty',
    'tawdry',
    'tearful',
    'tedious',
    'teeny',
    'teeny-tiny',
    'telling',
    'temporary',
    'ten',
    'tender',
    'tense',
    'tenuous',
    'terrific',
    'tested',
    'testy',
    'thankful',
    'therapeutic',
    'thick',
    'thin',
    'thinkable',
    'third',
    'thirsty',
    'thoughtful',
    'thoughtless',
    'threatening',
    'thundering',
    'tidy',
    'tight',
    'tightfisted',
    'tiny',
    'tired',
    'tiresome',
    'toothsome',
    'torpid',
    'tough',
    'towering',
    'tranquil',
    'trashy',
    'tremendous',
    'tricky',
    'trite',
    'troubled',
    'truculent',
    'true',
    'truthful',
    'typical',
    'ubiquitous',
    'ultra',
    'unable',
    'unaccountable',
    'unadvised',
    'unarmed',
    'unbecoming',
    'unbiased',
    'uncovered',
    'understood',
    'undesirable',
    'unequal',
    'unequaled',
    'uneven',
    'unhealthy',
    'uninterested',
    'unique',
    'unkempt',
    'unknown',
    'unnatural',
    'unruly',
    'unsightly',
    'unsuitable',
    'untidy',
    'unused',
    'unusual',
    'unwieldy',
    'unwritten',
    'upbeat',
    'uppity',
    'upset',
    'uptight',
    'used',
    'useful',
    'useless',
    'utopian',
    'vacuous',
    'vagabond',
    'vague',
    'valuable',
    'various',
    'vast',
    'vengeful',
    'venomous',
    'verdant',
    'versed',
    'victorious',
    'vigorous',
    'violent',
    'violet',
    'vivacious',
    'voiceless',
    'volatile',
    'voracious',
    'vulgar',
    'wacky',
    'waggish',
    'waiting',
    'wakeful',
    'wandering',
    'wanting',
    'warlike',
    'warm',
    'wary',
    'wasteful',
    'watery',
    'weak',
    'wealthy',
    'weary',
    'well-groomed',
    'well-made',
    'well-off',
    'well-to-do',
    'wet',
    'whimsical',
    'whispering',
    'white',
    'whole',
    'wholesale',
    'wicked',
    'wide',
    'wide-eyed',
    'wiggly',
    'wild',
    'willing',
    'windy',
    'wiry',
    'wise',
    'wistful',
    'witty',
    'woebegone',
    'womanly',
    'wonderful',
    'wooden',
    'woozy',
    'workable',
    'worried',
    'worthless',
    'wrathful',
    'wretched',
    'wrong',
    'wry',
    'yellow',
    'yielding',
    'young',
    'youthful',
    'yummy',
    'zany',
    'zealous',
    'zesty',
    'zippy',
    'zonked',
];
const capitalizedTraits = traits.map((element) => element.charAt(0).toUpperCase() + element.slice(1));


const API = "https://randomuser.me/api/";
const fetchUsers = async () => {
    const response = await fetch(API);
    const resultArray = await response.json();
    const data = resultArray.results[0];
    console.log(data);
    return data;
};

const createUser = async () => {

    const data = await fetchUsers();
    console.log(data)
    currentUser.name = data.name.first;


    if (ageFilter === "anyAge") {
        currentUser.age = data.dob.age;
    } else if (ageFilter === "twenty") {
        if (data.dob.age >= 20) {
            currentUser.age = data.dob.age;
        } else { return }
    } else if (ageFilter === "thirty") {
        if (data.dob.age >= 30) {
            currentUser.age = data.dob.age;
        } else { return }
    } else if (ageFilter === "forty") {
        if (data.dob.age >= 40) {
            currentUser.age = data.dob.age;
        } else { return }
    }




    currentUser.career = careers[Math.floor(Math.random() * careers.length)];

    if (planFilter === "anyPlan") {
        currentUser.plan = plans[Math.floor(Math.random() * plans.length)];
    } else if (planFilter === "gold") {
        currentUser.plan = "Gold"
    } else if (planFilter === "basic") {
        currentUser.plan = "Basic";
    } else if (planFilter === "platinum") {
        currentUser.plan = "Platinum";
    };


    if (genderFilter === "anyGender") {
        currentUser.gender = data.gender
    } else if (ageFilter === "male") {
        if (data.dob.age >= 20) {
            currentUser.gender = data.gender
        } else { return }
    } else if (ageFilter === "female") {
        if (data.dob.age >= 30) {
            currentUser.gender = data.gender
        } else { return };
    }


    currentUser.location = `${data.location.state}, ${data.location.country}`;
    currentUser.personality = `${capitalizedTraits[Math.floor(Math.random() * capitalizedTraits.length)]}, ${capitalizedTraits[Math.floor(Math.random() * capitalizedTraits.length)]}, ${capitalizedTraits[Math.floor(Math.random() * capitalizedTraits.length)]}, ${capitalizedTraits[Math.floor(Math.random() * capitalizedTraits.length)]} `;
    currentUser.image = data.picture.large;


    passIntoCard(currentUser);

};





const passIntoCard = (data) => {
    console.log(data);
    const name = document.querySelector(".name");
    const firstName = data.name;
    name.innerHTML = firstName;

    const name2 = document.getElementById("name");
    const firstName2 = data.name;
    name2.innerHTML = firstName2;

    const age = document.querySelector(".age");
    age.innerHTML = data.age;


    const userCareer = document.querySelector(".work");
    userCareer.innerHTML = data.career;

    const userPlan = document.querySelector(".plan");
    userPlan.innerHTML = `${data.name} is a ${data.plan} member`;

    const location = document.querySelector(".location");
    location.innerHTML = data.location;

    const personality = document.querySelector(".personality");
    personality.innerHTML = data.personality;

    const image = document.querySelector(".imgOfUser");
    image.setAttribute('src', `${data.image}`)
};

const likeButton = document.querySelector(".no");
const passButton = document.querySelector(".yes");
likeButton.addEventListener("click", createUser);
passButton.addEventListener("click", createUser);

const card = document.querySelector(".card")
card.addEventListener("click", () => {
    card.style.height = "40rem";
    card.style.backgroundColor = 'white';
    card.style.width = '30rem';
    card.style.padding = '0px';
    card.style.borderRadius = '25px';
    card.style.margin = '0px';
    card.style.padding = '0.5rem';
    card.style.border = '1px solid black';
    card.style.boxShadow = '0 0 30px rgba(0, 0, 0, .15)';
    card.style.display = "flex"
    card.style.flexDirection = "column"
    card.style.justifyContent = "center"

    document.querySelector(".start").style.display = "none";
    card.classList.remove('.cardHover')
    document.querySelector(".info").style.display = "flex";
    document.querySelector(".image").style.display = "block";
});
createUser()