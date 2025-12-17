const questionsBionutrition = [
    {
        "question": "Quel est le mécanisme d'action principal des polyphénols de l'olivier (Olea europaea) dans la réduction du stress oxydatif lié à l'inflammation chronique, et quelle est la posologie optimale d'extrait standardisé ?",
        "options": [
            "Inhibition de la NADPH oxydase et activation de la voie Nrf2 – 500 mg/jour titré à 20% d'oleuropéine",
            "Chélation des métaux de transition (fer, cuivre) – 1000 mg/jour d'extrait hydroalcoolique",
            "Stimulation de la synthèse de glutathion via l'activation de la glutamate-cystéine ligase – 250 mg/jour d'extrait sec",
            "Blocage des récepteurs Toll-like (TLR4) – 300 mg/jour d'extrait glycériné"
        ],
        "correctAnswers": ["Inhibition de la NADPH oxydase et activation de la voie Nrf2 – 500 mg/jour titré à 20% d'oleuropéine"],
        "explanation": "L'oleuropéine, polyphénol majeur de l'olivier, réduit le stress oxydatif en inhibant la NADPH oxydase (source de radicaux superoxydes) et en activant la voie Nrf2 (défense antioxydante). La posologie optimale est de 500 mg/jour d'extrait standardisé à 20% d'oleuropéine. Les autres mécanismes ou posologies ne sont pas validés.",
        "multiple": false
    },
    {
        "question": "Quels sont les marqueurs biologiques permettant d'évaluer l'efficacité d'un protocole de bionutrition ciblant la perméabilité intestinale (leaky gut) chez un patient souffrant de maladies auto-immunes ? (3 bonnes réponses)",
        "options": [
            "Diminution des niveaux sériques de zonuline",
            "Augmentation du rapport lactulose/mannitol dans le test urinaire",
            "Réduction des anticorps anti-LPS (lipopolysaccharides)",
            "Normalisation des niveaux de calprotectine fécale",
            "Augmentation de la diversité du microbiote (index de Shannon)"
        ],
        "correctAnswers": [
            "Diminution des niveaux sériques de zonuline",
            "Réduction des anticorps anti-LPS (lipopolysaccharides)",
            "Normalisation des niveaux de calprotectine fécale"
        ],
        "explanation": "Les marqueurs pertinents pour évaluer la perméabilité intestinale sont : la zonuline (régulateur des jonctions serrées), les anticorps anti-LPS (marqueur de translocation bactérienne), et la calprotectine (inflammation intestinale). Le rapport lactulose/mannitol augmente en cas de leaky gut (donc une réduction serait un marqueur d'amélioration), et la diversité du microbiote est un marqueur indirect.",
        "multiple": true
    },
    {
        "question": "Quel est le protocole de supplémentation en glutathion liposomal recommandé pour un patient présentant une charge toxique élevée (métaux lourds, xénobiotiques) et une déplétion en antioxydants ?",
        "options": [
            "500 mg/jour en cure de 3 mois, avec évaluation des niveaux de GST (glutathion S-transférase)",
            "250 mg 2 fois/jour pendant 6 semaines, associé à de la N-acétylcystéine (NAC)",
            "1000 mg/jour en prise unique le matin, avec suivi des transaminases",
            "150 mg/jour en synergie avec de la vitamine C liposomale, pendant 1 an"
        ],
        "correctAnswers": ["500 mg/jour en cure de 3 mois, avec évaluation des niveaux de GST (glutathion S-transférase)"],
        "explanation": "Pour une détoxification optimale, la posologie recommandée est de 500 mg/jour de glutathion liposomal (biodisponibilité élevée) en cure de 3 mois, avec suivi des enzymes de phase II comme la GST. Les autres protocoles sont soit sous-dosés (250 mg), soit trop concentrés (1000 mg sans preuve d'efficacité supplémentaire), ou trop longs (1 an sans justification).",
        "multiple": false
    },
    {
        "question": "Quels sont les critères de qualité d'un extrait de curcumine (Curcuma longa) pour une utilisation en bionutrition anti-inflammatoire ? (3 bonnes réponses)",
        "options": [
            "Teneur minimale en curcuminoïdes totaux ≥ 95%",
            "Standardisation en curcumine libre (non conjuguée) ≥ 80%",
            "Absence de solvants résiduels (hexane, acétone)",
            "Addition de pipérine (10 mg par dose) pour améliorer la biodisponibilité",
            "Formulation liposomale ou micellaire pour une absorption optimale"
        ],
        "correctAnswers": [
            "Teneur minimale en curcuminoïdes totaux ≥ 95%",
            "Absence de solvants résiduels (hexane, acétone)",
            "Formulation liposomale ou micellaire pour une absorption optimale"
        ],
        "explanation": "Un extrait de curcumine de qualité doit contenir ≥95% de curcuminoïdes totaux, être exempt de solvants toxiques, et utiliser une formulation liposomale/micellaire pour une biodisponibilité optimale. La standardisation en curcumine libre n'est pas un critère (les conjugués sont aussi actifs), et la pipérine n'est pas systématiquement ajoutée dans les extraits standardisés.",
        "multiple": true
    },
    {
        "question": "Quel est le rôle des acides gras oméga-3 (EPA/DHA) dans la modulation de l'inflammation systémique, et quel est le ratio EPA/DHA optimal pour un effet anti-inflammatoire maximal ?",
        "options": [
            "Inhibition de la synthèse des eicosanoïdes pro-inflammatoires (PGE2, LTB4) via la compétition avec l'acide arachidonique – ratio EPA/DHA de 2:1",
            "Stimulation de la production de résolvines et protectines – ratio EPA/DHA de 1:2",
            "Blocage des récepteurs TLR4 sur les macrophages – ratio EPA/DHA de 3:1",
            "Augmentation de la fluidité des membranes cellulaires – ratio EPA/DHA de 1:1"
        ],
        "correctAnswers": ["Inhibition de la synthèse des eicosanoïdes pro-inflammatoires (PGE2, LTB4) via la compétition avec l'acide arachidonique – ratio EPA/DHA de 2:1"],
        "explanation": "Les oméga-3 réduisent l'inflammation en inhibant la synthèse des eicosanoïdes pro-inflammatoires (PGE2, LTB4) via la compétition avec l'acide arachidonique. Le ratio optimal pour cet effet est de 2:1 (EPA/DHA), car l'EPA est plus actif sur les voies inflammatoires. Les autres mécanismes ou ratios ne sont pas optimaux pour cet effet spécifique.",
        "multiple": false
    },
    {
        "question": "Quels sont les signes cliniques d'une carence fonctionnelle en vitamine B12 (cobalamine) chez un patient végétalien, malgré des taux sériques normaux ? (3 bonnes réponses)",
        "options": [
            "Fatigue chronique avec intolérance à l'effort",
            "Neuropathie périphérique (engourdissements, fourmillements)",
            "Anémie macrocytaire (MCV > 100 fL)",
            "Déséquilibre du microbiote intestinal (dysbiose)",
            "Augmentation de l'homocystéine plasmatique (> 12 µmol/L)"
        ],
        "correctAnswers": [
            "Fatigue chronique avec intolérance à l'effort",
            "Neuropathie périphérique (engourdissements, fourmillements)",
            "Augmentation de l'homocystéine plasmatique (> 12 µmol/L)"
        ],
        "explanation": "Une carence fonctionnelle en B12 chez un végétalien peut se manifester par une fatigue chronique, une neuropathie périphérique (même sans anémie), et une hyperhomocystéinémie (>12 µmol/L, marqueur sensible). L'anémie macrocytaire est un signe tardif, et la dysbiose n'est pas un signe spécifique de carence en B12.",
        "multiple": true
    },
    {
        "question": "Quel est le protocole de supplémentation en zinc bisglycinate pour un patient présentant une alopécie androgénétique et des niveaux sériques de zinc < 70 µg/dL ?",
        "options": [
            "30 mg/jour pendant 3 mois, avec évaluation des niveaux de cuivre",
            "15 mg/jour en association avec 2 mg de cuivre, pendant 6 mois",
            "50 mg/jour en cure de choc de 1 mois, suivie de 25 mg/jour en entretien",
            "10 mg/jour en synergie avec de la vitamine B6, pendant 1 an"
        ],
        "correctAnswers": ["30 mg/jour pendant 3 mois, avec évaluation des niveaux de cuivre"],
        "explanation": "Pour une carence modérée en zinc (zincémie <70 µg/dL) avec alopécie, la posologie recommandée est de 30 mg/jour de zinc bisglycinate (forme hautement biodisponible) pendant 3 mois, avec suivi du cuivre (risque de déséquilibre). Les autres protocoles sont soit sous-dosés (15 mg), soit trop agressifs (50 mg), ou trop longs (1 an sans justification).",
        "multiple": false
    },
    {
        "question": "Quels sont les mécanismes par lesquels la quercétine module la réponse immunitaire dans les maladies auto-immunes ? (2 bonnes réponses)",
        "options": [
            "Inhibition de la dégranulation des mastocytes via la stabilisation des membranes cellulaires",
            "Blocage de la signalisation JAK/STAT dans les lymphocytes T helper",
            "Stimulation de la phagocytose par les macrophages via l'activation du complément",
            "Augmentation de la production d'IL-10 par les lymphocytes T régulateurs (Treg)",
            "Inhibition de la synthèse des immunoglobulines E (IgE)"
        ],
        "correctAnswers": [
            "Inhibition de la dégranulation des mastocytes via la stabilisation des membranes cellulaires",
            "Augmentation de la production d'IL-10 par les lymphocytes T régulateurs (Treg)"
        ],
        "explanation": "La quercétine module l'immunité dans les maladies auto-immunes en inhibant la dégranulation des mastocytes (effet anti-histaminique) et en stimulant la production d'IL-10 par les Treg (effet anti-inflammatoire). Elle n'affecte pas directement la voie JAK/STAT, la phagocytose, ou la synthèse des IgE.",
        "multiple": true
    },
    {
        "question": "Quel est l'impact d'une supplémentation en NAD+ (nicotinamide adénine dinucléotide) sur le métabolisme énergétique mitochondrial chez les patients souffrant de fatigue chronique ?",
        "options": [
            "Augmentation de l'activité des sirtuines (SIRT1, SIRT3) et amélioration de la biogenèse mitochondriale",
            "Inhibition de la chaîne respiratoire au niveau du complexe I, réduisant la production de ROS",
            "Stimulation de la glycolyse anaérobie via l'activation de la pyruvate kinase",
            "Réduction de la perméabilité de la membrane mitochondriale interne (effet anti-apoptotique)"
        ],
        "correctAnswers": ["Augmentation de l'activité des sirtuines (SIRT1, SIRT3) et amélioration de la biogenèse mitochondriale"],
        "explanation": "Le NAD+ active les sirtuines (SIRT1, SIRT3), qui stimulent la biogenèse mitochondriale et améliorent l'efficacité énergétique. Il ne bloque pas la chaîne respiratoire, ne stimule pas la glycolyse anaérobie, et n'affecte pas directement la perméabilité membranaire mitochondriale.",
        "multiple": false
    },
    {
        "question": "Quels sont les critères de choix entre la forme méthylée (5-MTHF) et la forme non méthylée (acide folique) de la vitamine B9 dans un protocole de bionutrition pour un patient porteur de la mutation MTHFR C677T homozygote ? (2 bonnes réponses)",
        "options": [
            "Privilégier la 5-MTHF pour contourner le bloc enzymatique lié à la mutation",
            "Choisir l'acide folique en cas de carence sévère (besoin de doses supérieures à 5 mg/jour)",
            "Associer systématiquement la 5-MTHF à de la vitamine B12 méthylcobalamine",
            "Éviter toute supplémentation en B9 en cas de mutation homozygote (risque d'accumulation de folates non métabolisés)",
            "Utiliser exclusivement la 5-MTHF en association avec de la bétaine (TMG) pour soutenir la méthylation"
        ],
        "correctAnswers": [
            "Privilégier la 5-MTHF pour contourner le bloc enzymatique lié à la mutation",
            "Associer systématiquement la 5-MTHF à de la vitamine B12 méthylcobalamine"
        ],
        "explanation": "Chez les patients MTHFR C677T homozygotes, la 5-MTHF (forme active) est préférable pour contourner le bloc enzymatique, et doit être associée à de la B12 méthylcobalamine (cofacteur de la méthylation). L'acide folique est déconseillé (risque d'accumulation de folates non métabolisés), et la bétaine peut être utile mais n'est pas systématique.",
        "multiple": true
    },
    {
        "question": "Quel est le rôle des probiotiques spécifiques (souches Saccharomyces boulardii et Lactobacillus rhamnosus GG) dans la restauration de la barrière intestinale chez les patients atteints de maladies inflammatoires chroniques de l'intestin (MICI) ?",
        "options": [
            "Stimulation de la sécrétion d'IgA par les cellules de Paneth",
            "Inhibition de la translocation bactérienne via la compétition pour les récepteurs aux adhérines",
            "Augmentation de l'expression des jonctions serrées (occludine, claudine-1)",
            "Réduction de la production d'IL-17 par les lymphocytes Th17"
        ],
        "correctAnswers": ["Augmentation de l'expression des jonctions serrées (occludine, claudine-1)"],
        "explanation": "Ces probiotiques restaurent la barrière intestinale en augmentant l'expression des protéines des jonctions serrées (occludine, claudine-1), réduisant ainsi la perméabilité. Ils n'affectent pas directement la sécrétion d'IgA, la compétition pour les adhérines (mécanisme mineur), ou la production d'IL-17 (plutôt ciblée par d'autres souches).",
        "multiple": false
    },
    {
        "question": "Quels sont les marqueurs cliniques et biologiques permettant d'évaluer l'efficacité d'un protocole de bionutrition ciblant la détoxification hépatique (phase I et II) chez un patient exposé aux xénobiotiques ? (3 bonnes réponses)",
        "options": [
            "Diminution des niveaux sériques de gamma-glutamyl transférase (GGT)",
            "Augmentation de l'excrétion urinaire de sulfates et glucuronides",
            "Normalisation du rapport oméga-6/oméga-3 dans les membranes érythrocytaires",
            "Réduction des niveaux de bilirubine conjuguée",
            "Amélioration du score de fatigue (échelle de Chalder)"
        ],
        "correctAnswers": [
            "Diminution des niveaux sériques de gamma-glutamyl transférase (GGT)",
            "Augmentation de l'excrétion urinaire de sulfates et glucuronides",
            "Amélioration du score de fatigue (échelle de Chalder)"
        ],
        "explanation": "Les marqueurs pertinents pour évaluer la détoxification hépatique sont : la GGT (enzyme de phase II), l'excrétion urinaire de métabolites conjugués (sulfates, glucuronides), et l'amélioration clinique (fatigue). Le rapport oméga-6/3 et la bilirubine ne sont pas des marqueurs directs de détoxification.",
        "multiple": true
    },
    {
        "question": "Quel est le protocole de supplémentation en glutathion réduit (GSH) pour un patient présentant une intoxication aux métaux lourds (plomb, mercure) et une déplétion en antioxydants ?",
        "options": [
            "250 mg/jour de GSH liposomal + 500 mg/jour de N-acétylcystéine (NAC), en cure de 6 mois avec suivi des métaux urinaires",
            "500 mg/jour de GSH intraveineux 2 fois/semaine pendant 4 semaines",
            "100 mg/jour de GSH en spray buccal + 200 mg/jour d'acide alpha-lipoïque, pendant 3 mois",
            "1000 mg/jour de GSH en gélules gastrorésistantes, associé à de la silymarine"
        ],
        "correctAnswers": ["250 mg/jour de GSH liposomal + 500 mg/jour de N-acétylcystéine (NAC), en cure de 6 mois avec suivi des métaux urinaires"],
        "explanation": "Pour une détoxification des métaux lourds, le protocole optimal associe 250 mg/jour de GSH liposomal (biodisponibilité) et 500 mg/jour de NAC (précurseur du GSH), en cure de 6 mois avec suivi des métaux urinaires. Les autres protocoles sont soit trop invasifs (IV), soit sous-dosés (100 mg), ou non optimaux (gélules gastrorésistantes sans preuve d'efficacité supérieure).",
        "multiple": false
    },
    {
        "question": "Quels sont les mécanismes par lesquels la vitamine D3 module l'immunité innée et adaptative dans les maladies auto-immunes ? (2 bonnes réponses)",
        "options": [
            "Inhibition de la différenciation des lymphocytes Th17 via la réduction de l'IL-17",
            "Stimulation de la production de cathélicidine (LL-37) par les macrophages",
            "Augmentation de la prolifération des lymphocytes B autoréactifs",
            "Blocage de la présentation de l'antigène par les cellules dendritiques",
            "Réduction de la sécrétion d'IFN-γ par les lymphocytes Th1"
        ],
        "correctAnswers": [
            "Inhibition de la différenciation des lymphocytes Th17 via la réduction de l'IL-17",
            "Stimulation de la production de cathélicidine (LL-37) par les macrophages"
        ],
        "explanation": "La vitamine D3 module l'immunité en inhibant la différenciation des Th17 (réduction de l'IL-17, pro-inflammatoire) et en stimulant la production de cathélicidine (peptide antimicrobien). Elle ne stimule pas les lymphocytes B autoréactifs, ne bloque pas la présentation de l'antigène, et ne réduit pas spécifiquement l'IFN-γ.",
        "multiple": true
    },
    {
        "question": "Quel est le rôle des prébiotiques (inuline, FOS) dans la modulation du microbiote intestinal chez les patients souffrant de syndrome métabolique ?",
        "options": [
            "Stimulation sélective de la croissance des bactéries productrices de butyrate (ex : Faecalibacterium prausnitzii)",
            "Inhibition de l'absorption des lipides alimentaires via la formation de micelles",
            "Réduction de la perméabilité intestinale par augmentation de l'expression des mucines",
            "Augmentation de la production d'acides gras à chaîne courte (AGCC) et réduction de l'endotoxémie"
        ],
        "correctAnswers": ["Augmentation de la production d'acides gras à chaîne courte (AGCC) et réduction de l'endotoxémie"],
        "explanation": "Les prébiotiques (inuline, FOS) modulent le microbiote en augmentant la production d'AGCC (butyrate, propionate), ce qui réduit l'endotoxémie (LPS) et améliore le métabolisme. Ils ne ciblent pas spécifiquement Faecalibacterium, n'inhibent pas l'absorption des lipides, et n'affectent pas directement les mucines.",
        "multiple": false
    },
    {
        "question": "Quels sont les critères de qualité d'un extrait de resvératrol (Polygonum cuspidatum) pour une utilisation en bionutrition anti-âge ? (3 bonnes réponses)",
        "options": [
            "Teneur minimale en resvératrol trans ≥ 98%",
            "Absence de pesticides et métaux lourds (certification USP/EP)",
            "Standardisation en émodine (anthraquinone) ≤ 0,1%",
            "Extraction par CO2 supercritique pour préserver les polyphénols",
            "Addition de pipérine (10 mg par dose) pour améliorer la biodisponibilité"
        ],
        "correctAnswers": [
            "Teneur minimale en resvératrol trans ≥ 98%",
            "Absence de pesticides et métaux lourds (certification USP/EP)",
            "Extraction par CO2 supercritique pour préserver les polyphénols"
        ],
        "explanation": "Un extrait de resvératrol de qualité doit contenir ≥98% de resvératrol trans (forme active), être exempt de contaminants (USP/EP), et utiliser une extraction par CO2 supercritique (préservation des polyphénols). La standardisation en émodine n'est pas pertinente (composé indésirable), et la pipérine n'est pas systématiquement ajoutée.",
        "multiple": true
    },
    {
        "question": "Quel est le mécanisme d'action des sulforaphane (issu du brocoli) dans la détoxification des xénobiotiques, et quelle est la posologie optimale d'extrait standardisé ?",
        "options": [
            "Activation de la voie Nrf2 et induction des enzymes de phase II (GST, NQO1) – 100 mg/jour titré à 10% de sulforaphane",
            "Inhibition du cytochrome P450 1A2 (CYP1A2) – 50 mg/jour d'extrait aqueux",
            "Stimulation de l'excrétion biliaire des toxines via l'augmentation de la bile – 200 mg/jour d'extrait lipophile",
            "Blocage des récepteurs Aryl hydrocarbon (AhR) – 500 mg/jour de poudre de graines germées"
        ],
        "correctAnswers": ["Activation de la voie Nrf2 et induction des enzymes de phase II (GST, NQO1) – 100 mg/jour titré à 10% de sulforaphane"],
        "explanation": "Le sulforaphane active la voie Nrf2, induisant les enzymes de phase II (GST, NQO1) qui facilitent la détoxification des xénobiotiques. La posologie optimale est de 100 mg/jour d'extrait standardisé à 10%. Les autres mécanismes ou posologies ne sont pas validés.",
        "multiple": false
    },
    {
        "question": "Quels sont les marqueurs biologiques permettant d'évaluer l'efficacité d'un protocole de bionutrition ciblant la méthylation chez un patient présentant une mutation MTHFR et une hyperhomocystéinémie ? (3 bonnes réponses)",
        "options": [
            "Diminution des niveaux d'homocystéine plasmatique (< 10 µmol/L)",
            "Augmentation du rapport SAM/SAH (S-adénosylméthionine/S-adénosylhomocystéine)",
            "Normalisation des niveaux de vitamine B12 active (holotranscobalamine II)",
            "Réduction des niveaux de folates sériques non méthylés",
            "Augmentation de l'activité de la méthylène-tétrahydrofolate réductase (MTHFR)"
        ],
        "correctAnswers": [
            "Diminution des niveaux d'homocystéine plasmatique (< 10 µmol/L)",
            "Augmentation du rapport SAM/SAH (S-adénosylméthionine/S-adénosylhomocystéine)",
            "Normalisation des niveaux de vitamine B12 active (holotranscobalamine II)"
        ],
        "explanation": "Les marqueurs pertinents pour évaluer la méthylation sont : la baisse de l'homocystéine (<10 µmol/L), l'augmentation du rapport SAM/SAH (indice de capacité de méthylation), et la normalisation de la B12 active (cofacteur clé). Les folates non méthylés et l'activité MTHFR ne sont pas des marqueurs directs d'efficacité.",
        "multiple": true
    },
    {
        "question": "Quel est le protocole de supplémentation en coenzyme Q10 (ubiquinol) pour un patient sous statines présentant une fatigue musculaire et une déplétion en CoQ10 ?",
        "options": [
            "100 mg/jour d'ubiquinol en 2 prises, avec évaluation des niveaux plasmiques après 3 mois",
            "200 mg/jour d'ubiquinone en prise unique le matin, pendant 6 semaines",
            "50 mg/jour en association avec de la vitamine E, pendant 1 an",
            "300 mg/jour en cure de choc de 1 mois, suivie de 50 mg/jour en entretien"
        ],
        "correctAnswers": ["100 mg/jour d'ubiquinol en 2 prises, avec évaluation des niveaux plasmiques après 3 mois"],
        "explanation": "Pour un patient sous statines, la posologie recommandée est de 100 mg/jour d'ubiquinol (forme réduite, meilleure biodisponibilité) en 2 prises, avec suivi des niveaux plasmiques après 3 mois. Les autres protocoles sont soit sous-dosés (50 mg), soit utilisent l'ubiquinone (moins biodisponible), ou sont trop courts/longs.",
        "multiple": false
    },
    {
        "question": "Quels sont les mécanismes par lesquels les flavonoïdes du thé vert (EGCG) modulent la signalisation cellulaire dans les cancers hormono-dépendants (ex : cancer du sein) ? (2 bonnes réponses)",
        "options": [
            "Inhibition de la tyrosine kinase du récepteur HER2/neu",
            "Activation de la voie AMPK et inhibition de la mTOR",
            "Stimulation de l'aromatase et augmentation des niveaux d'œstrogènes",
            "Blocage des récepteurs aux œstrogènes (ERα/ERβ)",
            "Induction de l'apoptose via l'activation des caspases"
        ],
        "correctAnswers": [
            "Activation de la voie AMPK et inhibition de la mTOR",
            "Induction de l'apoptose via l'activation des caspases"
        ],
        "explanation": "L'EGCG module la signalisation dans les cancers hormono-dépendants en activant l'AMPK (inhibition de la croissance tumorale via mTOR) et en induisant l'apoptose (caspases). Il n'inhibe pas directement HER2, ne stimule pas l'aromatase, et ne bloque pas les récepteurs aux œstrogènes.",
        "multiple": true
    },
    {
        "question": "Quel est le rôle des acides gras à chaîne courte (AGCC) produits par le microbiote intestinal dans la régulation du métabolisme glucidique ?",
        "options": [
            "Stimulation de la sécrétion de GLP-1 (glucagon-like peptide-1) par les cellules L intestinales",
            "Inhibition de la gluconéogenèse hépatique via l'activation de la voie AMPK",
            "Augmentation de la sensibilité à l'insuline par activation des récepteurs FFAR2/FFAR3",
            "Réduction de l'absorption du glucose au niveau des entérocytes"
        ],
        "correctAnswers": ["Augmentation de la sensibilité à l'insuline par activation des récepteurs FFAR2/FFAR3"],
        "explanation": "Les AGCC (butyrate, propionate) améliorent la sensibilité à l'insuline en activant les récepteurs FFAR2/FFAR3 (couplés aux protéines G) sur les cellules immunitaires et métaboliques. Ils ne stimulent pas directement le GLP-1, n'inhibent pas la gluconéogenèse, et n'affectent pas l'absorption du glucose.",
        "multiple": false
    },
    {
        "question": "Quels sont les critères de choix entre la forme active (pyridoxal-5-phosphate) et la forme non active (pyridoxine HCl) de la vitamine B6 dans un protocole de bionutrition pour un patient présentant une neuropathie diabétique ?",
        "options": [
            "Privilégier le pyridoxal-5-phosphate (P5P) pour contourner les polymorphismes génétiques affectant la pyridoxine kinase",
            "Choisir la pyridoxine HCl en cas de carence sévère (besoin de doses > 100 mg/jour)",
            "Associer systématiquement la P5P à de la vitamine B1 (thiamine) pour un effet synergique",
            "Éviter la pyridoxine HCl en cas de traitement par lévodopa (risque d'inactivation)",
            "Utiliser exclusivement la P5P en injection intramusculaire pour une biodisponibilité maximale"
        ],
        "correctAnswers": ["Privilégier le pyridoxal-5-phosphate (P5P) pour contourner les polymorphismes génétiques affectant la pyridoxine kinase"],
        "explanation": "La P5P (forme active) est préférable pour les patients avec neuropathie diabétique, car elle contourne les polymorphismes de la pyridoxine kinase (fréquents dans le diabète). Les autres options ne sont pas justifiées : la pyridoxine HCl est déconseillée à haute dose (neuropathie), l'association à la B1 n'est pas systématique, le risque avec la lévodopa est théorique, et l'injection n'est pas nécessaire.",
        "multiple": false
    },
    {
        "question": "Quel est le protocole de supplémentation en vitamine K2 (ménaquinone-7) pour un patient présentant une ostéoporose et une calcification artérielle, avec un ratio ostéocalcine sous-carboxylée/carboxylée élevé ?",
        "options": [
            "180 µg/jour de MK-7 en association avec 1000 mg de calcium et 800 UI de vitamine D3, pendant 6 mois",
            "45 µg/jour de MK-7 en prise unique le soir, avec suivi des niveaux de MGP (Matrix Gla Protein) carboxylée",
            "100 µg/jour de MK-4 en 2 prises, associé à 200 mg de magnésium, pendant 1 an",
            "360 µg/jour de MK-7 en cure de choc de 1 mois, suivie de 90 µg/jour en entretien"
        ],
        "correctAnswers": ["180 µg/jour de MK-7 en association avec 1000 mg de calcium et 800 UI de vitamine D3, pendant 6 mois"],
        "explanation": "Pour l'ostéoporose avec calcification artérielle et un ratio ostéocalcine élevé, la posologie recommandée est de 180 µg/jour de MK-7 (forme la plus biodisponible), associée à du calcium et de la vitamine D3 pour un effet synergique sur la minéralisation osseuse. Les autres protocoles sont soit sous-dosés (45 µg), soit utilisent la MK-4 (moins efficace), ou trop courts/longs.",
        "multiple": false
    },
    {
        "question": "Quels sont les mécanismes par lesquels la berberine module le métabolisme glucidique et lipidique dans le syndrome métabolique ? (3 bonnes réponses)",
        "options": [
            "Activation de l'AMPK (AMP-activated protein kinase) dans les hépatocytes et les muscles squelettiques",
            "Inhibition de la PCSK9 (proproteine convertase subtilisine/kexine type 9), réduisant les LDL",
            "Stimulation de la sécrétion d'insuline par les cellules β pancréatiques via la fermeture des canaux KATP",
            "Inhibition de la lipogenèse hépatique par activation de la voie PPAR-α",
            "Augmentation de l'expression des transporteurs GLUT4 dans les adipocytes"
        ],
        "correctAnswers": [
            "Activation de l'AMPK (AMP-activated protein kinase) dans les hépatocytes et les muscles squelettiques",
            "Inhibition de la lipogenèse hépatique par activation de la voie PPAR-α",
            "Augmentation de l'expression des transporteurs GLUT4 dans les adipocytes"
        ],
        "explanation": "La berberine module le métabolisme via : 1) l'activation de l'AMPK (amélioration de la sensibilité à l'insuline), 2) l'inhibition de la lipogenèse hépatique (PPAR-α), et 3) l'augmentation de l'expression de GLUT4 (capture du glucose). Elle n'inhibe pas la PCSK9 (mécanisme des statines) et ne stimule pas directement la sécrétion d'insuline (effet des sulfamides).",
        "multiple": true
    },
    {
        "question": "Quel est le rôle des fibres solubles (ex : psyllium) dans la modulation de la glycémie postprandiale chez les patients diabétiques de type 2 ?",
        "options": [
            "Ralentissement de la vidange gastrique et réduction de l'absorption du glucose via la formation d'un gel visqueux",
            "Stimulation de la sécrétion de GLP-1 (glucagon-like peptide-1) par les cellules L du côlon",
            "Inhibition de l'activité de l'alpha-amylase salivaire et pancréatique",
            "Augmentation de la sensibilité à l'insuline par activation des récepteurs FFAR2 dans les entérocytes"
        ],
        "correctAnswers": ["Ralentissement de la vidange gastrique et réduction de l'absorption du glucose via la formation d'un gel visqueux"],
        "explanation": "Les fibres solubles (psyllium) réduisent la glycémie postprandiale en ralentissant la vidange gastrique et en formant un gel qui limite l'absorption du glucose. Elles n'ont pas d'effet direct sur la sécrétion de GLP-1, l'alpha-amylase, ou les récepteurs FFAR2.",
        "multiple": false
    },
    {
        "question": "Quels sont les critères de qualité d'un extrait de resvératrol (Vitis vinifera) pour une utilisation en bionutrition anti-âge et cardioprotectrice ? (3 bonnes réponses)",
        "options": [
            "Teneur minimale en resvératrol trans ≥ 98%",
            "Standardisation en polyphénols totaux ≥ 50%",
            "Extraction par CO2 supercritique pour éviter les solvants résiduels",
            "Addition de pipérine (10 mg par dose) pour améliorer la biodisponibilité",
            "Certification sans OGM et sans pesticides (norme USP/EP)"
        ],
        "correctAnswers": [
            "Teneur minimale en resvératrol trans ≥ 98%",
            "Extraction par CO2 supercritique pour éviter les solvants résiduels",
            "Certification sans OGM et sans pesticides (norme USP/EP)"
        ],
        "explanation": "Un extrait de resvératrol de qualité doit contenir ≥98% de resvératrol trans (forme active), être extrait par CO2 supercritique (sans solvants toxiques), et être certifié sans OGM/pesticides. La standardisation en polyphénols totaux n'est pas un critère spécifique, et la pipérine n'est pas systématiquement ajoutée.",
        "multiple": true
    },
    {
        "question": "Quel est le mécanisme par lequel la N-acétylcystéine (NAC) potentialise l'effet détoxifiant du glutathion dans les intoxications aux métaux lourds ?",
        "options": [
            "Fourniture de cystéine, précurseur limitant de la synthèse du glutathion",
            "Activation directe de la glutathion S-transférase (GST)",
            "Chélation directe des métaux lourds via les groupes thiols",
            "Stimulation de la voie Nrf2 et induction des enzymes de phase II"
        ],
        "correctAnswers": ["Fourniture de cystéine, précurseur limitant de la synthèse du glutathion"],
        "explanation": "La NAC potentialise le glutathion en fournissant de la cystéine, un précurseur limitant de sa synthèse. Elle n'active pas directement la GST, ne chélate pas directement les métaux (contrairement à l'EDTA), et n'induit pas la voie Nrf2 (rôle du sulforaphane).",
        "multiple": false
    },
    {
        "question": "Quels sont les marqueurs cliniques et biologiques permettant d'évaluer l'efficacité d'un protocole de bionutrition ciblant la détoxification hépatique chez un patient exposé aux pesticides ? (3 bonnes réponses)",
        "options": [
            "Diminution des niveaux sériques de gamma-glutamyl transférase (GGT)",
            "Augmentation de l'excrétion urinaire de mercapturates (métabolites des conjugués au glutathion)",
            "Normalisation du rapport oméga-6/oméga-3 dans les membranes érythrocytaires",
            "Réduction des niveaux de bilirubine conjuguée",
            "Amélioration des scores de fatigue (échelle de Chalder)"
        ],
        "correctAnswers": [
            "Diminution des niveaux sériques de gamma-glutamyl transférase (GGT)",
            "Augmentation de l'excrétion urinaire de mercapturates (métabolites des conjugués au glutathion)",
            "Amélioration des scores de fatigue (échelle de Chalder)"
        ],
        "explanation": "Les marqueurs pertinents pour évaluer la détoxification hépatique sont : la GGT (enzyme de phase II), les mercapturates urinaires (métabolites des conjugués au glutathion), et l'amélioration clinique (fatigue). Le rapport oméga-6/3 et la bilirubine ne sont pas des marqueurs directs de détoxification.",
        "multiple": true
    },
    {
        "question": "Quel est le protocole de supplémentation en alpha-lipoïque (ALA) pour un patient diabétique présentant une neuropathie périphérique et un stress oxydatif élevé ?",
        "options": [
            "600 mg/jour d'ALA en 2 prises (300 mg le matin et 300 mg le soir), en cure de 6 mois avec évaluation de l'HbA1c",
            "300 mg/jour d'ALA en prise unique le matin, associé à 100 mg de vitamine B1",
            "1200 mg/jour d'ALA en cure de choc de 1 mois, suivie de 200 mg/jour en entretien",
            "200 mg/jour d'ALA en synergie avec 50 mg de coenzyme Q10, pendant 3 mois"
        ],
        "correctAnswers": ["600 mg/jour d'ALA en 2 prises (300 mg le matin et 300 mg le soir), en cure de 6 mois avec évaluation de l'HbA1c"],
        "explanation": "Pour la neuropathie diabétique, la posologie optimale est de 600 mg/jour d'ALA en 2 prises (meilleure biodisponibilité et effet antioxydant), en cure de 6 mois avec suivi de l'HbA1c. Les autres protocoles sont soit sous-dosés (200-300 mg), soit déséquilibrés (1200 mg en choc).",
        "multiple": false
    },
    {
        "question": "Quels sont les mécanismes par lesquels les probiotiques spécifiques (Lactobacillus acidophilus et Bifidobacterium bifidum) modulent l'immunité intestinale dans les maladies inflammatoires chroniques de l'intestin (MICI) ? (2 bonnes réponses)",
        "options": [
            "Stimulation de la production d'IgA sécrétoire par les plasmocytes intestinaux",
            "Inhibition de la différenciation des lymphocytes Th17 via la réduction de l'IL-23",
            "Augmentation de la perméabilité intestinale pour faciliter l'élimination des pathogènes",
            "Réduction de la production de mucines par les cellules caliciformes",
            "Activation de la voie TLR9 (Toll-like receptor 9) dans les cellules dendritiques"
        ],
        "correctAnswers": [
            "Stimulation de la production d'IgA sécrétoire par les plasmocytes intestinaux",
            "Inhibition de la différenciation des lymphocytes Th17 via la réduction de l'IL-23"
        ],
        "explanation": "Ces probiotiques modulent l'immunité intestinale en stimulant la production d'IgA (défense mucosale) et en inhibant la différenciation des Th17 (réduction de l'IL-23, pro-inflammatoire). Ils ne augmentent pas la perméabilité, ne réduisent pas les mucines, et n'activent pas spécifiquement TLR9.",
        "multiple": true
    },
    {
        "question": "Quel est le rôle des isoflavones de soja (daidzéine, génistéine) dans la modulation du métabolisme osseux chez les femmes ménopausées, et quelle est la posologie optimale pour un effet protecteur ?",
        "options": [
            "Activation des récepteurs aux œstrogènes β (ERβ) et inhibition de la résorption osseuse – 50 mg/jour d'isoflavones totales",
            "Stimulation de la différenciation des ostéoblastes via l'activation de la voie Wnt/β-caténine – 100 mg/jour de génistéine pure",
            "Inhibition de l'activité des ostéoclastes via la réduction du RANKL – 80 mg/jour d'extrait standardisé",
            "Augmentation de la synthèse de collagène de type I par les ostéocytes – 30 mg/jour de daidzéine"
        ],
        "correctAnswers": ["Activation des récepteurs aux œstrogènes β (ERβ) et inhibition de la résorption osseuse – 50 mg/jour d'isoflavones totales"],
        "explanation": "Les isoflavones de soja (daidzéine, génistéine) activent les récepteurs ERβ, inhibant la résorption osseuse et préservant la densité minérale. La posologie optimale est de 50 mg/jour d'isoflavones totales. Les autres mécanismes ou posologies ne sont pas validés.",
        "multiple": false
    },
    {
        "question": "Quels sont les critères de qualité d'un extrait de boswellia (Boswellia serrata) pour une utilisation en bionutrition anti-inflammatoire articulaire ? (3 bonnes réponses)",
        "options": [
            "Teneur minimale en acides boswéliques totaux ≥ 65%",
            "Standardisation en AKBA (acétyl-11-céto-β-boswellique) ≥ 30%",
            "Extraction par solvant hydroalcoolique (éthanol 70%)",
            "Absence de contaminants microbiens (norme USP/EP)",
            "Addition de curcumine pour potentialiser l'effet anti-inflammatoire"
        ],
        "correctAnswers": [
            "Teneur minimale en acides boswéliques totaux ≥ 65%",
            "Standardisation en AKBA (acétyl-11-céto-β-boswellique) ≥ 30%",
            "Absence de contaminants microbiens (norme USP/EP)"
        ],
        "explanation": "Un extrait de boswellia de qualité doit contenir ≥65% d'acides boswéliques totaux et ≥30% d'AKBA (composé actif), et être exempt de contaminants (USP/EP). L'extraction hydroalcoolique n'est pas optimale (solvants apolaires préférés), et l'ajout de curcumine n'est pas standardisé.",
        "multiple": true
    },
    {
        "question": "Quel est le protocole de supplémentation en mélatonine pour un patient présentant un décalage horaire (jet lag) et des troubles du sommeil, avec une préférence pour les formes à libération prolongée ?",
        "options": [
            "3 mg de mélatonine à libération prolongée, pris 1 heure avant l'heure de coucher souhaitée à destination, pendant 3 jours",
            "1 mg de mélatonine standard, pris au coucher pendant 5 jours",
            "5 mg de mélatonine à libération immédiate, pris 30 min avant le coucher, pendant 1 semaine",
            "0,5 mg de mélatonine en spray sublingual, utilisé 2 fois/jour (matin et soir), pendant 2 jours"
        ],
        "correctAnswers": ["3 mg de mélatonine à libération prolongée, pris 1 heure avant l'heure de coucher souhaitée à destination, pendant 3 jours"],
        "explanation": "Pour le jet lag, la posologie recommandée est de 3 mg de mélatonine à libération prolongée, prise 1 heure avant l'heure de coucher souhaitée à destination, pendant 3 jours (synchronisation du rythme circadien). Les autres protocoles sont soit sous-dosés (0,5-1 mg), soit trop courts/longs, ou utilisent des formes non adaptées (libération immédiate).",
        "multiple": false
    }
]
