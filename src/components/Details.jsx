import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { nigerianMenu } from './Products'

export const Details = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    const findDetail = nigerianMenu.find(product => product.slug === slug)
    if (findDetail) {
      setDetail(findDetail)
    } else {
      navigate("/") // safer than window.location.href
    }
  }, [slug, navigate])

  if (!detail) return <p>Loading...</p>

  return (
    <div className="details">
      <h1>{detail.name}</h1>
      <img src={detail.image} alt={detail.name} width="400" />
      <p>{detail.description}</p>
      <h3>{detail.price}</h3>
    </div>
  )
}
