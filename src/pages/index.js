import React from "react";
import Slider from "react-slick";
import Image from 'next/image';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    // food1.jpeg ~ food33.jpeg

    const settings = {
        initialSlide: 0,
        slidesToShow: 1,
        adaptiveHeight: true,
        centerMode: true,
        swipe: true,
        autoplay: true,
        swipeToSlide: false,
        infinite: true,
        dots: false,
    }

    const images = [...Array(30).keys()].map(i => `/images/food${i + 1}.jpeg`);
    return (
        <div className="bg-white p-4">
            <div className
                     ="flex justify-center mb-4">
                <h1 className="text-3xl font-bold underline">ソウルガイド 🇰🇷🇯🇵</h1>
            </div>
            <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                    <span className="font-bold text-md">こんにちは！</span>
                    <span className="text-md mt-4">私たちはソウルに住んでいるカップルです。 👨👩</span>
                    <span className="text-md">日本人の友達を作り、日本語を勉強するためにガイドをしています。</span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-2">
                    <div className="flex flex-col items-center mb-4">
                        <img
                            src="/main_left.jpeg"
                            alt="오월 이슈"
                            className="rounded-full w-48 h-48 mb-2 object-cover"
                            width="240"
                            height="180"
                            // style="aspect-ratio: 240 / 180; object-fit: cover;"
                        />
                        <span className="text-xs">박준석 (ジュン)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center">
                            <img
                                src="/climbing.jpeg"
                                alt="소풍 가는길"
                                className="rounded-full w-24 h-24 mb-2"
                                width="140"
                                height="100"
                                // style="aspect-ratio: 140 / 100; object-fit: cover;"
                            />
                            <span className="text-xs">アクティビティー</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="/coffee.jpeg"
                                alt="소풍 가는길"
                                className="rounded-full w-24 h-24 mb-2 object-cover"
                                width="140"
                                height="100"
                                // style="aspect-ratio: 140 / 100; object-fit: cover;"
                            />
                            <span className="text-xs">カフェ</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-4">
                        <img
                            src="/main_right.jpeg"
                            alt="신나는 휴가"
                            className="rounded-full w-48 h-48 mb-2 object-cover"
                            width="120"
                            height="180"
                            // style="aspect-ratio: 120 / 180; object-fit: cover;"
                        />
                        <span className="text-xs">박주은　（ジュウン）</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="/food2.jpeg"
                            alt="즐거운 식사"
                            className="w-24 h-24 mb-2 rounded-full object-cover"
                            width="140"
                            height="100"
                            // style="aspect-ratio: 140 / 100; object-fit: cover;"
                        />
                        <span className="text-xs">楽しい食事</span>
                    </div>
                </div>
            </div>

            <div className={'w-full my-20'}>
                <Slider {...settings}
                        style={{height: '100%'}}>
                    {images.map(image => (
                        <div className={'w-[300px] grid place-items-center h-full'}>
                            <img  style={{objectFit: 'contain'}} width={300} height={300} src={image} alt={'image'}/>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="flex flex-col text-center items-center font-bold text-lg my-10 sm:text-lg">
                <div>
                    韓国で珍しいカフェや美味しいレストランを知っています。
                </div>
                <div>
                    私たちがガイドします。 一緒に楽しい時間を過ごしましょう。 😄
                </div>
            </div>

            <style jsx global>{`
                .slick-list {
                    height: 100%;
                }
            `}</style>
        </div>
    )
}
