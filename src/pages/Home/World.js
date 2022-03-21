import React from "react";
import world_img from '../../assets/img/world.svg';
import spotify_img from '../../assets/img/spotify.svg'
import discord_img from '../../assets/img/discord.svg'
import amazon_img from '../../assets/img/amazon.svg'
import reddit_img from '../../assets/img/reddit.svg'
import netflix_img from '../../assets/img/netflix.svg'

// spotify, discord, amazon, reddit, netflix,

const World = () => {
  return (
    <div className="text-center bg-gray-50">
      <h3 className="lg:text-4xl md:text-3xl font-black lg:pt-10 md:pt-12 pt-8 lg:leading-for-world">
        Huge Global Network <br />
        of Fast VPN
      </h3>
      <p className="lg:mt-8 md:mt-4 mt-4 px-3">
        See LaslesVPN everywhere to make it easier for you when you move <br />{" "}
        locations.
      </p>
      <div className="lg:mt-16 md:mt-12 mt-5">
        <img className="w-5/6 mx-auto" src={world_img} alt="world " />
      </div>
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div className="flex justify-around lg:mx-[8.5rem] md:mx-8 md:mt-6">
        <img className="w-1/12 lg:w-2/12 md:w-1/12" src={netflix_img} alt="netflix" />
        <img className="w-1/12 lg:w-2/12 md:w-1/12" src={reddit_img} alt="reddit" />
        <img className="w-1/12 lg:w-2/12 md:w-1/12" src={amazon_img} alt="amazon" />
        <img className="w-1/12 lg:w-2/12 md:w-1/12" src={discord_img} alt="discord" />
        <img className="w-1/12 lg:w-2/12 md:w-1/12" src={spotify_img} alt="spotify" />
      </div>
    </div>
  );
};

export default World;
