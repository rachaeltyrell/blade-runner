$(document).ready(() => {
  const quoteSource = [{
      quote: "Have you ever retired a human by mistake?",
      name: "Rachael"
    },
    {
      quote: "Lófaszt! Nehogy már! Te vagy a Blade, Blade Runner!",
      name: "Gaff"
    },
    {
      quote: "Do you trust me?",
      name: "Deckard"
    },
    {
      quote: "Commerce is our goal, here. More human than human.",
      name: "Deckard"
    },
    {
      quote: "You're not cop, you're little people!",
      name: "Holden"
    },
    {
      quote: "We need you, Sebastian. You're our best and only friend.",
      name: "Pris"
    },
    {
      quote: "Have you felt yourself to be exploited in any way?",
      name: "Deckard"
    },
    {
      quote: "Would you... like to be upgraded?",
      name: "Tyrell"
    },
    {
      quote: "A new life awaits you in the Off-world colonies!",
      name: "Announcer"
    },
    {
      quote: "My birthday is April 10, 2017. How long do I live?",
      name: "Leon"
    },
    {
      quote: "Six! Seven! Go to Hell or go to Heaven!",
      name: "Roy"
    },
    {
      quote: "Questions... Morphology? Longevity? Incept dates?",
      name: "Roy"
    },
    {
      quote: "She's a replicant, isn't she?",
      name: "Deckard"
    },
    {
      quote: "The light that burns twice as bright burns half as long.",
      name: "Tyrell"
    },
    {
      quote: "I've never seen a turtle... But I understand what you mean.",
      name: "Leon"
    },
    {
      quote: "I don't know why he saved my life.",
      name: "Deckard"
    },
    {
      quote: "Are you for real?",
      name: "Zhora"
    },
    {
      quote: "Is this testing whether I'm a Replicant or a lesbian, Mr. Deckard?",
      name: "Rachael"
    },
    {
      quote: "I'm not in the business. I am the business.",
      name: "Rachael"
    },
    {
      quote: "You know that Voigt-Kampff test of yours? Did you ever take that test yourself?",
      name: "Rachael"
    },
    {
      quote: "Painful to live in fear, isn't it?",
      name: "Leon"
    },
    {
      quote: "Nothing is worse than having an itch you can never scratch.",
      name: "Leon"
    },
    {
      quote: "Wake up! Time to die!",
      name: "Leon"
    },
    {
      quote: "Chew, if only you could see what I've seen with your eyes!",
      name: "Roy"
    },
    {
      quote: "It's not an easy thing to meet your maker.",
      name: "Roy"
    },
    {
      quote: "I've done questionable things.",
      name: "Roy"
    },
    {
      quote: "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion.",
      name: "Roy"
    },
    {
      quote: "It's too bad she won't live. But then again, who does?",
      name: "Gaff"
    },
    {
      quote: "I think, Sebastian, therefore I am.",
      name: "Pris"
    },
    {
      quote: "They're my friends. I make them.",
      name: "J.F."
    },
    {
      quote: "You think I'd be working in a place like this if I could afford a real snake?",
      name: "Zhora"
    },
    {
      quote: "Do you like our owl?",
      name: "Rachael"
    },
    {
      quote: " It seems you feel our work is not of benefit to the public.",
      name: "Rachael"
    },
    {
      quote: "I'm surprised you didn't come here sooner.",
      name: "Tyrell"
    },
    {
      quote: "It’s your birthday. Someone gives you a calfskin wallet. How do you react?",
      name: "Voight-Kampff test"
    },
    {
      quote: "You’re watching television. Suddenly you realize there’s a wasp crawling on your arm.",
      name: "Voight-Kampff test"
    },
    {
      quote: "May I ask you a personal question?",
      name: "Rachael"
    },
    {
      quote: "Sometimes to love someone, you got to be a stranger.",
      name: "Rick Deckard"
    },
    {
      quote: "I always knew you were special. Maybe this is how. A child. Of woman born. Pushed into the world. Wanted. Loved.",
      name: "Joi"
    },
    {
      quote: "Sometimes to love someone, you got to be a stranger.",
      name: "Rick Deckard"
    },
    {
      quote: "It's very clever to keep yourself empty of information, and all it cost to you was everything.",
      name: "Wallace"
    },
    {
      quote: "There is an order to things. That's what we do here. We keep order.",
      name: "Lt. Joshi"
    },
    {
      quote: "Dying for the right cause. It's the most human thing we can do.",
      name: "Freysa"
    },
    {
      quote: "All the courage in the world cannot alter fact.",
      name: "Wallace"
    },
    {
      quote: "I always told you. You're special. Your history isn't over yet. There's still a page left.",
      name: "Joi"
    },
    {
      quote:"You newer models are happy scraping the shit... because you've never seen a miracle.",
      name: "Lt. Joshi"
    }
  ];

  $('#quoteButton').click(evt => {
    //define the containers of the info we target
    const quote = $('#quoteContainer p').text();
    const quoteGenius = $('#quoteGenius').text();
    //prevent browser's default action
    evt.preventDefault();
    //getting a new random number to attach to a quote and setting a limit
    const sourceLength = quoteSource.length;
    const randomNumber = Math.floor(Math.random() * sourceLength);
    //set a new quote
    for (i = 0; i <= sourceLength; i += 1) {
      const newQuoteText = quoteSource[randomNumber].quote;
      const newQuoteGenius = quoteSource[randomNumber].name;
      const timeAnimation = 700;
      const quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, () => {
        quoteContainer.html('');
        quoteContainer.append(`<p>${newQuoteText}</p><p id="quoteGenius">-								${newQuoteGenius}</p>`);

        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });

      break;
    }; //end for loop

  }); //end quoteButton function


}); //end document ready
