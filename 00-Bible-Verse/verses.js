const localQuotes = [
    {
        text: 'I can do all things through him who strengthens me.',
        author: 'Philippians 4:13',
    },
    {
        text: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
        author: 'John 3:16',
    },
    {
        text: 'Trust in the LORD with all your heart, and do not lean on your own understanding.',
        author: 'Proverbs 3:5',
    },
    {
        text: 'For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.',
        author: 'Jeremiah 29:11',
    },
    {
        text: 'The LORD is my shepherd; I shall not want.',
        author: 'Psalms 23:1',
    },
    {
        text: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.',
        author: 'Galatians 2:20',
    },
    {
        text: 'But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.',
        author: 'Isaiah 40:31',
    },
    {
        text: 'Be strong and courageous. Do not fear or be in dread of them, for it is the LORD your God who goes with you. He will not leave you or forsake you.',
        author: 'Deuteronomy 31:6',
    },
    {
        text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God,',
        author: 'Ephesians 2:8',
    },
    {
        text: 'In the beginning, God created the heavens and the earth.',
        author: 'Genesis 1:1',
    },
    {
        text: 'Come to me, all who labor and are heavy laden, and I will give you rest.',
        author: 'Matthew 11:28',
    },
    {
        text: 'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.',
        author: 'Romans 6:23',
    },
    {
        text: 'He heals the brokenhearted and binds up their wounds.',
        author: 'Psalms 147:3',
    },
    {
        text: 'But seek first the kingdom of God and his righteousness, and all these things will be added to you.',
        author: 'Matthew 6:33',
    },
    {
        text: 'Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.',
        author: 'Isaiah 41:10',
    },
    {
        text: 'The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly.',
        author: 'John 10:10',
    },
    {
        text: 'I am the way, and the truth, and the life. No one comes to the Father except through me.',
        author: 'John 14:6',
    },
    {
        text: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
        author: 'Romans 8:28',
    },
    {
        text: 'Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful;',
        author: '1 Corinthians 13:4-5',
    },
    {
        text: 'Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.',
        author: 'Philippians 4:6',
    },
    {
        text: 'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day.',
        author: '2 Corinthians 4:16',
    },
    {
        text: 'I am the way, and the truth, and the life. No one comes to the Father except through me.',
        author: 'John 14:6',
    },
    {
        text: 'For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart.',
        author: 'Hebrews 4:12',
    },
    {
        text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness,',
        author: 'Galatians 5:22',
    },

    {
        text: 'The Lord is my rock, my fortress, and my deliverer; my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold.',
        author: 'Psalm 18:2',
    },
    {
        text: 'But seek first the kingdom of God and his righteousness, and all these things will be added to you.',
        author: 'Matthew 6:33',
    },
    {
        text: 'I can do all things through him who strengthens me.',
        author: 'Philippians 4:13',
    },
    {
        text: 'The fear of the Lord is the beginning of knowledge; fools despise wisdom and instruction.',
        author: 'Proverbs 1:7',
    },
    {
        text: 'Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life, which God has promised to those who love him.',
        author: 'James 1:12',
    },
    {
        text: 'And let us not grow weary of doing good, for in due season we will reap, if we do not give up.',
        author: 'Galatians 6:9',
    },
    {
        text: 'The Lord is my shepherd; I shall not want.',
        author: 'Psalm 23:1',
    },
    {
        text: 'For God gave us a spirit not of fear but of power and love and self-control.',
        author: '2 Timothy 1:7',
    },
    {
        text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.',
        author: 'Galatians 5:22-23',
    },
    {
        text: 'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.',
        author: 'Jeremiah 29:11',
    },
    {
        text: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
        author: 'Romans 8:28',
    },
    {
        text: 'The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?',
        author: 'Psalm 27:1',
    },
    {
        text: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.',
        author: '2 Corinthians 12:9',
    },
    {
        text: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
        author: 'Romans 8:28',
    },
    {
        text: 'The Lord is my strength and my song; he has become my salvation.',
        author: 'Exodus 15:2',
    },
    {
        text: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
        author: 'Amos 5:24',
    },
    {
        text: 'The Lord is my portion, says my soul, therefore I will hope in him.',
        author: 'Lamentations 3:24',
    },
    {
        text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.',
        author: 'Galatians 5:22-23',
    },
    {
        text: 'For the Lord your God is a merciful God. He will not leave you or destroy you or forget the covenant with your fathers that he swore to them.',
        author: 'Deuteronomy 4:31',
    },
    {
        text: 'The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.',
        author: 'Psalm 28:7',
    },
    {
        text: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
        author: 'Amos 5:24',
    },
    {
        text: 'The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?',
        author: 'Psalm 27:1',
    },
    {
        text: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.',
        author: '2 Corinthians 12:9',
    },
    {
        text: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
        author: 'Romans 8:28',
    },
    {
        text: 'The Lord is my strength and my song; he has become my salvation.',
        author: 'Exodus 15:2',
    },
    {
        text: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
        author: 'Amos 5:24',
    },
    {
        text: 'The Lord is my portion, says my soul, therefore I will hope in him.',
        author: 'Lamentations 3:24',
    },
    {
        text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.',
        author: 'Galatians 5:22-23',
    },
    {
        text: 'For the Lord your God is a merciful God. He will not leave you or destroy you or forget the covenant with your fathers that he swore to them.',
        author: 'Deuteronomy 4:31',
    },
    {
        text: 'The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.',
        author: 'Psalm 28:7',
    },
    {
        text: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
        author: 'Amos 5:24',
    },
    {
        text: 'The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?',
        author: 'Psalm 27:1',
    },
    {
        text: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.',
        author: '2 Corinthians 12:9',
    },
    {
        text: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
        author: 'Romans 8:28',
    },
    {
        text: 'The Lord is my strength and my song; he has become my salvation.',
        author: 'Exodus 15:2',
    },
    {
        text: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
        author: 'Amos 5:24',
    },
    {
        text: 'The Lord is my portion, says my soul, therefore I will hope in him.',
        author: 'Lamentations 3:24',
    },
    {
        text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.',
        author: 'Galatians 5:22-23',
    },
    {
        text: 'For the Lord your God is a merciful God. He will not leave you or destroy you or forget the covenant with your fathers that he swore to them.',
        author: 'Deuteronomy 4:31',
    },
    {
        text: 'The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.',
        author: 'Psalm 28:7',
    },
    {
        text: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
        author: 'Amos 5:24',
    },
    {
        text: 'The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?',
        author: 'Psalm 27:1',
    },
    {
        text: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.',
        author: '2 Corinthians 12:9',
    },
    {
        text: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
        author: 'Romans 8:28',
    },
    {
        text: 'The Lord is my strength and my song; he has become my salvation.',
        author: 'Exodus 15:2',
    },
    {
        text: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
        author: 'Amos 5:24',
    },
    {
        text: 'The Lord is my portion, says my soul, therefore I will hope in him.',
        author: 'Lamentations 3:24',
    },
    {
        text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.',
        author: 'Galatians 5:22-23',
    },
    {
        text: 'For the Lord your God is a merciful God. He will not leave you or destroy you or forget the covenant with your fathers that he swore to them.',
        author: 'Deuteronomy 4:31',
    },
    {
        text: 'The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.',
        author: 'Psalm 28:7',
    },
    {
        text: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
        author: 'Amos 5:24',
    },
    {
        text: 'The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?',
        author: 'Psalm 27:1',
    },
    {
        text: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.',
        author: '2 Corinthians 12:9',
    },
    {
        text: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
        author: 'Romans 8:28',
    },
    {
        text: 'The Lord is my strength and my song; he has become my salvation.',
        author: 'Exodus 15:2',
    },
    {
        text: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
        author: 'Amos 5:24',
    },
    {
        text: 'The Lord is my portion, says my soul, therefore I will hope in him.',
        author: 'Lamentations 3:24',
    },
    {
        text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.',
        author: 'Galatians 5:22-23',
    },
    {
        text: 'For the Lord your God is a merciful God. He will not leave you or destroy you or forget the covenant with your fathers that he swore to them.',
        author: 'Deuteronomy 4:31',
    },
    {
        text: 'The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.',
        author: 'Psalm 28:7',
    },
    {
        text: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
        author: 'Amos 5:24',
    },
    {
        text: 'The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?',
        author: 'Psalm 27:1',
    },
    {
        text: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.',
        author: '2 Corinthians 12:9',
    },
    {
        text: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
        author: 'Romans 8:28',
    },
    {
        text: 'The Lord is my strength and my song; he has become my salvation.',
        author: 'Exodus 15:2',
    },
    {
        text: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
        author: 'Amos 5:24',
    },
    {
        text: 'The Lord is my portion, says my soul, therefore I will hope in him.',
        author: 'Lamentations 3:24',
    },
    {
        text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.',
        author: 'Galatians 5:22-23',
    },
    {
        text: 'For the Lord your God is a merciful God. He will not leave you or destroy you or forget the covenant with your fathers that he swore to them.',
        author: 'Deuteronomy 4:31',
    },
    {
        text: 'The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.',
        author: 'Psalm 28:7',
    },
    {
        text: 'But let justice roll down like waters, and righteousness like an ever-flowing stream.',
        author: 'Amos 5:24',
    },
    {
        text: 'The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?',
        author: 'Psalm 27:1',
    },
    {
        text: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.',
        author: '2 Corinthians 12:9',
    },
    {
        text: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
        author: 'Romans 8:28',
    },
    {
        text: 'Keep your life free from love of money, and be content with what you have, for he has said, “I will never leave you nor forsake you.”',
        author: 'Hebrews 13:5',
    },
    {
        text: 'Pray without ceasing,',
        author: '1 Thessalonians 5:17',
    },
    {
        text: 'If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.',
        author: '1 John 1:9',
    },
    {
        text: 'Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity.',
        author: '1 Timothy 4:12',
    },
    {
        text: 'Fear not, for I have redeemed you; I have called you by name, you are mine.',
        author: 'Isaiah 43:1',
    },
    {
        text: 'Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.',
        author: 'Galatians 6:10',
    },
    {
        text: 'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.',
        author: 'Zephaniah 3:17',
    },
    {
        text: 'Blessed are the peacemakers, for they will be called children of God.',
        author: 'Matthew 5:9',
    },
    {
        text: 'I have hidden your word in my heart that I might not sin against you.',
        author: 'Psalms 119:11',
    },
    {
        text: 'And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.',
        author: 'Colossians 3:17',
    },
    {
        text: 'For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.',
        author: 'Ephesians 2:10',
    },
    {
        text: 'But the Lord is faithful, and he will strengthen you and protect you from the evil one.',
        author: '2 Thessalonians 3:3',
    },
    {
        text: 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.',
        author: 'Psalms 46:10',
    },
    {
        text: 'Cast all your anxiety on him because he cares for you.',
        author: '1 Peter 5:7',
    },
    {
        text: 'But seek first his kingdom and his righteousness, and all these things will be given to you as well.',
        author: 'Matthew 6:33',
    },
    {
        text: 'This is love: not that we loved God, but that he loved us and sent his Son as an atoning sacrifice for our sins.',
        author: '1 John 4:10',
    },
    {
        text: 'For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened.',
        author: 'Matthew 7:8',
    },
    {
        text: 'Blessed are those who mourn, for they shall be comforted.',
        author: 'Matthew 5:4',
    },
    {
        text: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.',
        author: 'Psalms 34:18',
    },
    {
        text: 'You are the light of the world. A town built on a hill cannot be hidden.',
        author: 'Matthew 5:14',
    },
];

export { localQuotes };

