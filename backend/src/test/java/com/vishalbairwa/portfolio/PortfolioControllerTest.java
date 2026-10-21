package com.vishalbairwa.portfolio;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vishalbairwa.portfolio.dto.ContactRequestDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class PortfolioControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testGetFullPortfolio() throws Exception {
        mockMvc.perform(get("/api/portfolio"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.profile.name", is("Vishal Bairwa")))
                .andExpect(jsonPath("$.stats", hasSize(4)))
                .andExpect(jsonPath("$.experiences", hasSize(2)))
                .andExpect(jsonPath("$.caseStudies", hasSize(2)))
                .andExpect(jsonPath("$.articles", hasSize(5)));
    }

    @Test
    void testContactMessageSubmission() throws Exception {
        ContactRequestDto dto = new ContactRequestDto("Alex Founder", "alex@startup.io", "Project Inquiries", "Let's discuss an APM role.");

        mockMvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.status", is("success")))
                .andExpect(jsonPath("$.id").exists());

        // Verify retrieval via CMS endpoint
        mockMvc.perform(get("/api/contact/messages"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(greaterThanOrEqualTo(1))))
                .andExpect(jsonPath("$[0].email", notNullValue()));
    }

    @Test
    void testResumeDownloadEndpoint() throws Exception {
        mockMvc.perform(get("/api/resume"))
                .andExpect(status().isOk())
                .andExpect(header().string("Content-Disposition", containsString("Vishal_Bairwa_Product.pdf")));
    }
}
