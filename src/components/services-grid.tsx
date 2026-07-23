"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, Filter, MoveRight } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/content";

const filters = [
  { value: "all", label: "Alla Tjänster" },
  ...services.map((service) => ({ value: service.category, label: service.filter })),
];

export function ServicesGrid() {
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? services : services.filter((service) => service.category === filter);

  return (
    <>
      <div className="service-filters shell">
        <strong><Filter /> Filtrera:</strong>
        <div className="filter-buttons">
          {filters.map((item) => (
            <button className={filter === item.value ? "active" : ""} type="button" key={item.value} onClick={() => setFilter(item.value)}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="service-list shell">
        {shown.map((service) => (
          <article className="service-list-card" id={service.category} key={service.id}>
            <div className="service-list-card__image">
              <Image src={service.image} alt={service.title} fill loading="eager" sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
              <span>{service.category}</span>
            </div>
            <div className="service-list-card__body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="service-time"><Clock3 /> Beräknad tid: {service.time}</p>
              <div className="service-card-footer">
                <strong>Från {service.price} kr</strong>
                <Link href="/#quote-form" aria-label={`Begär offert för ${service.title}`}><MoveRight /></Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
