import React from 'react'
import { useParams } from 'react-router-dom'
import products from "../../data/product"
import icon2 from "../../assets/icon2222.png"

export const ProductDetails = () => {
    const { id } = useParams();
    const book = products.find((b) => b.id === Number(id));
    return (
        <>
            <div>
                <section>
                    <div className='container'>
                        <ul className='flex gap-1 mb-8'>
                            <li>
                                <p className='text-blue-400 text-16px font-medium'>Бош сахифа / </p>
                            </li>
                            <li>
                                <p className='text-gray-400 text-16px font-medium'> Китоблар</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="container">
                    <div className="flex gap-6">
                        <div className='w-[350px] h-[472px]'>
                            <img src={book.img} alt="img" />
                        </div>
                        <div>
                            <div className="grid grid-cols-2">
                                <div>
                                    <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
                                    <p className="text-gray-500 mb-4">{book.sub_title}</p>
                                </div>
                                <div>
                                    <img src={icon2} alt="icon" />
                                </div>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam esse, fugit repellat quis voluptate dolorum dolor quasi totam non eligendi beatae, nulla praesentium voluptatum. Commodi consequatur molestiae repellendus cupiditate beatae.
                            </p>
                            <div className='w-[414px] mt-4 flex justify-between'>
                                <ul>
                                    <li>
                                        <p className='text-[14px] font-normal text-gray-400'>Муаллиф</p>
                                    </li>
                                    <li>
                                        <p className='text-[18px] font-semibold'>Kevin Smiley</p>
                                    </li>

                                </ul>
                                <ul>
                                    <li>
                                        <p className='text-[14px] font-normal text-gray-400'>Нашриёт</p>
                                    </li>
                                    <li>
                                        <p className='text-[18px] font-semibold'>Wepress Inc.</p>
                                    </li>

                                </ul>
                                <ul>
                                    <li>
                                        <p className='text-[14px] font-normal text-gray-400'>Йил</p>
                                    </li>
                                    <li>
                                        <p className='text-[18px] font-semibold'>1999</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='border-2 border-dashed border-gray-400 rounded-2xl my-5'></div>
                            <ul className='flex gap-4'>
                                <li className='bg-blue-600 text-[16px] font-medium text-white w-[242px] py-2 px-4 rounded-2xl'>
                                    Сотиб олиш - 65 000 сум
                                </li>
                                <li className='border border-blue-600 text-[16px] font-medium w-[242px] py-2 px-4 rounded-2xl'>
                                    Аудио тинглаш - 55 000 сум
                                </li>
                                <li className='border border-blue-600 text-[16px] font-medium w-[242px] py-2 px-4 rounded-2xl'>
                                    Онлайн укиш - 45 000 сум
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

