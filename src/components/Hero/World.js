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
      <h3 className="text-4xl font-black pt-28 leading-for-world">
        Huge Global Network <br />
        of Fast VPN
      </h3>
      <p className="mt-8">
        See LaslesVPN everywhere to make it easier for you when you move <br />{" "}
        locations.
      </p>
      <div className="mt-36">
        <img className="w-5/6 mx-auto" src={world_img} alt="world " />
      </div>
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div className="flex justify-between mx-[8.5rem]">
        <img src={netflix_img} alt="netflix" />
        <img src={reddit_img} alt="reddit" />
        <img src={amazon_img} alt="amazon" />
        <img src={discord_img} alt="discord" />
        <img src={spotify_img} alt="spotify" />
      </div>
    </div>
  );
};

export default World;
