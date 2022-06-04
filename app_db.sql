--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

-- Started on 2022-04-26 12:28:47

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 200 (class 1259 OID 16395)
-- Name: tinas_proceso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proceso_db (
    lote character varying(255) NOT NULL,
    producto character varying(255) NOT NULL,
    equivalente integer NOT NULL,
    serial character varying(255) NOT NULL,
    horainiciollenado character varying(255),
    templ real,
    acidezinicial real,
    horainiciocalent character varying(255),
    horaadicionmp115 character varying(255),
    cantidadmp115 real,
    horaadicioncu character varying(255),
    nombrecu1 character varying(255),
    cantidadcu1 real,
    tempinc real,
    horaadicionmp036 character varying(255),
    cantidadmp036 real,
    cantidadaguamp036 real,
    cantidadmp520 real,
    cantidadaguamp520 real,
    horafinalllenado character varying(255),
    ajustetemp real,
    horaajustetemp character varying(255),
    horaadicionmp275 character varying(255),
    cantidadmp275 real,
    lotemp275 character varying(255),
    cantidadaguamp275 real,
    horapruebacorte1 character varying(255),
    horapruebacorte2 character varying(255),
    horacorte character varying(255),
    tempcorte real,
    aflojar integer,
    agitadodelicado integer,
    tiempococcion integer,
    tempfinalcoccion real,
    tiemporetenciongrano real,
    horainiciodescarga character varying(255),
    horafinaldescarga character varying(255),
    operarioresponsable text,
    segundooperario text,
    ayudante text,
    liderdegrupo text,
    horaadicionmp520 character varying(255),
    numerodeproceso character varying(255),
    tempinicialgranoacond real,
    nombrecu2 character varying(255),
    cantidadcu2 real,
    azfinal real,
    medida real,
    cantidadpruebascorte integer
);


ALTER TABLE public.tinas_proceso OWNER TO postgres;

--
-- TOC entry 2986 (class 0 OID 0)
-- Dependencies: 200
-- Name: TABLE tinas_proceso; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.tinas_proceso IS 'Area de Tinas de Proceso';


--
-- TOC entry 2850 (class 2606 OID 16402)
-- Name: tinas_proceso Numero de Lote; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tinas_proceso
    ADD CONSTRAINT "Numero de Lote" PRIMARY KEY (lote);


-- Completed on 2022-04-26 12:28:47

--
-- PostgreSQL database dump complete
--

